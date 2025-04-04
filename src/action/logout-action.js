"use server";
import { signOut } from "@/utils/auth";
import { redirect } from "next/navigation";

export const logoutAction = async () => {
    await signOut({ redirect: false, callbackUrl: '/login' });
    redirect("/login");
};