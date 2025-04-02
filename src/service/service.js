import { failedResponse } from "@/helper/message";
import { getAuthToken } from "@/utils/api";

/**
 * @developer <Pichet>
 * @since 01-April-2025
 */

// Base API url
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Custom request header
export const httpHeader = (token = "") => {
    return {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + token
    }
}

// Save data to API endpoint
export const getService = async (endpoint) => {
    try {
        const _SESSION = await getAuthToken();
        const _TOKEN = _SESSION.payload.token;
        const HEADER = httpHeader(_TOKEN); // Get custom header

        const RESPONSE = await fetch(`${BASE_URL}${endpoint}`, {
            method: "GET",
            headers: HEADER,
        });

        // Response data
        const DATA = await RESPONSE.json();
        return DATA;
    } catch (err) {
        return failedResponse(err);
    }
}

// Save data to API endpoint
export const saveService = async (endpoint, data) => {
    try {
        const HEADER = httpHeader(); // Get custom header
        const RESPONSE = await fetch(`${BASE_URL}${endpoint}`, {
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

// Login account
export const loginService = async ({ email, password }) => {
    try {
        const HEADER = httpHeader(); // Get custom header
        const RESPONSE = await fetch(`${BASE_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: HEADER,
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        // Response data
        const DATA = await RESPONSE.json();
        return DATA;
    } catch (err) {
        return failedResponse(err);
    }
}