"use server";

import { taskSchema } from "@/helper/validation";
import { saveService } from "@/service/service";
import { revalidateTag } from 'next/cache';

/**
 * @developer <Pichet>
 * @since 02-April-2025
 */

export const createTaskAction = async (id, formData) => {
    // Convert form data into object
    const FORM = Object.fromEntries(formData);

    // Check validation in zod
    const VALIDATION = taskSchema.safeParse(FORM);

    if (!VALIDATION.success) {
        // Response valiation message
        return VALIDATION.error.flatten().fieldErrors;
    } else {
        const RESPONSE = await saveService(`/api/v1/task/workspace/${id}`, FORM);

        if (RESPONSE?.status == 500) {
            return { endDate: ["End Date cannot be in the past."] }
        } else {
            revalidateTag("update-workspace");
        }

    }

}

export const updateTaskStatusAction = async (id, wsId, status) => {
    await saveService(`/api/v1/task/${id}/workspace/${wsId}/status?status=${status}`, {}, "PATCH");
    revalidateTag("update-workspace");
}