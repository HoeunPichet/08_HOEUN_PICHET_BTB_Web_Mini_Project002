import { Breadcrumb } from "../breadcrumb";
import Profile from "../profile";
import { SessionProvider } from "next-auth/react";

export const HeaderLayout = () => {
    return (
        <>
            <header className="px-14 2xl:px-20 h-24 flex items-center justify-between border-b border-slate-300">
                <Breadcrumb title={"HRD Design"} />
                <Profile />
            </header>
        </>
    );
}