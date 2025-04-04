"use server";

import { workspaceSchema } from "@/helper/validation";
import { saveService } from "@/service/service";
import { revalidateTag } from 'next/cache';

/**
 * @developer <Pichet>
 * @since 02-April-2025
 * @param {*} formData
 */
export const createWorkspaceAction = async (id, formData) => {
    // Convert form data into object
    const FORM = Object.fromEntries(formData);

    // Check validation in zod
    const VALIDATION = workspaceSchema.safeParse(FORM);

    if (!VALIDATION.success) {
        // Response valiation message
        return VALIDATION.error.flatten().fieldErrors;
    } else {
        if (id) {
            await saveService(`/api/v1/workspace/${id}`, FORM, "PUT");
        } else {
            await saveService(`/api/v1/workspace`, FORM);
        }
        revalidateTag("update-workspace");
    }
}