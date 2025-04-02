import { failedResponse } from "@/helper/message";

/**
 * @developer <Pichet>
 * @since 01-April-2025
 */

// Base API url
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Custom request header
export const httpHeader = () => {
    return {
        "Content-Type": "application/json",
        "Accept": "*/*",
    }
}

// Save data to API endpoint
export const saveService = async (url, data) => {
    try {
        const HEADER = httpHeader(); // Get custom header
        const RESPONSE = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: HEADER,
            body: JSON.stringify(data),
        });

        // Response data
        const DATA = await RESPONSE.json();
        return DATA;
    } catch (err) {
        return failedResponse(err);
    }
}