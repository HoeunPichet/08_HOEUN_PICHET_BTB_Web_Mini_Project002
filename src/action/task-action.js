"use server";

import { taskSchema } from "@/helper/validation";
import { saveService } from "@/service/service";
import { revalidateTag } from 'next/cache';

/**
 * @developer <Pichet>
 * @since 02-April-2025
 * @param {*} formData
 */
export const createTaskAction = async (id, formData) => {
    // Convert form data into object
    const FORM = Object.fromEntries(formData);

    // Check validation in zod
    const VALIDATION = taskSchema.safeParse(FORM);

    if (!VALIDATION.success) {
        console.log(VALIDATION.error.flatten().fieldErrors)
        // Response valiation message
        return VALIDATION.error.flatten().fieldErrors;
    } else {
        await saveService(`/api/v1/task/workspace/${id}`, FORM);
        revalidateTag("update-workspace");
    }

}