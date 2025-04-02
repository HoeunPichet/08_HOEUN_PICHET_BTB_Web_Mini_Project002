import { Sidebar } from "@/components/layout/sidebar";
import "../globals.css";
import { HeaderLayout } from "@/components/layout/header";
import WorkspaceHeader from "@/components/workspaceHeader";

export const metadata = {
    title: {
        template: "%s | Monster",
        default: "Todo List | Monster",
    },
    description: "Homework 006 - Next.js",
};

export default function AuthorizationLayout({ children }) {
    return (
        <html lang="en">
            <body className="text-charcoal">
                <article className="flex w-full">
                    <Sidebar />
                    <div className="grow grid grid-cols-1 content-start">
                        <HeaderLayout />
                        <main className="px-14 2xl:px-20 py-5 w-full">
                            <WorkspaceHeader />
                            {children}
                        </main>
                    </div>
                </article>
            </body>
        </html>
    );
}
