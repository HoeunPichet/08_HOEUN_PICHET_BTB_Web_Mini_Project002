"use server";

import { successResponse } from "@/helper/message";
import { loginSchema } from "@/helper/validation";
import { getAuthToken } from "@/utils/api";
import { signIn } from "@/utils/auth";
import { redirect } from "next/navigation";

/**
 * @developer <Pichet>
 * @since 02-April-2025
 * @param {*} formData
 * @return {object}
 */
export const loginAction = async (formData) => {
    // Convert form data into object
    const FORM = Object.fromEntries(formData);
    // Check validation in zod
    const VALIDATION = loginSchema.safeParse(FORM);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!VALIDATION.success) {
        // Response valiation message
        return VALIDATION.error.flatten().fieldErrors;
    } else {
        // Attempt to sign in with credentials
        await signIn("credentials", {
            email,
            password,
            redirect: false, // Prevent automatic redirection
        });

        const session = await getAuthToken();

        // Redirect to todo list when authorized
        if (session?.status == 500 || session == null) return { incorrect: ["Invalid email or password."] }
        else redirect("/todo")
    }
}