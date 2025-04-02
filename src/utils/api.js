import { auth } from "@/utils/auth";

export async function getAuthToken() {
    const session = await auth();
    return session?.user?.token?.user || null;
}