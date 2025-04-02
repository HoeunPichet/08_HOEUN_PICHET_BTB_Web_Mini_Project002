"use server";

import { successResponse } from "@/helper/message";
import { registrationSchema } from "@/helper/validation";
import { saveService } from "@/service/submit";

/**
 * @developer <Pichet>
 * @since 01-April-2025
 * @param {*} formData
 * @return {object}
 */
export const registerAction = async (formData) => {
    // Convert form data into object
    const FORM = Object.fromEntries(formData);
    // Check validation in zod
    const VALIDATION = registrationSchema.safeParse(FORM);

    if (!VALIDATION.success) {
        // Response valiation message
        return VALIDATION.error.flatten().fieldErrors;
    } else {
        // Get response
        const RESPONSE = await saveService("/api/v1/auth/register", FORM);

        if (RESPONSE?.status != 500) {
            // Existing account registration
            if (RESPONSE.status === "CONFLICT") return { email: [RESPONSE.message] };
            // Successfully registration
            else return successResponse("Registration completed successfully!");
        } else {
            // Response error
            return RESPONSE;
        }
    }
}