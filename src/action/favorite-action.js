"use server";

import { saveService } from "@/service/service";
import { revalidateTag } from 'next/cache';

/**
 * @developer <Pichet>
 * @since 02-April-2025
 * @param {*} formData
 * @return {object}
 */
export const favoriteAction = async (formData) => {
    const WS_ID = formData.get("workspaceId");
    const IS_FAVORITE = formData?.get("favorite") ? true : false;

    await saveService(`/api/v1/workspace/${WS_ID}/favorite?favorite=${IS_FAVORITE}`, {}, "PATCH");
    revalidateTag("update-workspace");
}