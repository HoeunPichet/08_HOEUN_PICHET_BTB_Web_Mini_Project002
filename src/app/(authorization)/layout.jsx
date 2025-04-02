import { Sidebar } from "@/components/layout/sidebar";

export default function AuthorizationLayout({ children }) {
    return (
        <article className="flex w-full">
            <Sidebar />
            <div className="grow grid grid-cols-1 content-start">
                {children}
            </div>
        </article>
    );
}
