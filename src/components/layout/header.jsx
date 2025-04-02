import { Breadcrumb } from "../breadcrumb";
import Profile from "../profile";

export const HeaderLayout = ({ main = "", title = "", status = true }) => {
    return (
        <>
            <header className="px-14 2xl:px-20 h-24 flex items-center justify-between border-b border-slate-300">
                <Breadcrumb main={main} title={title} status={status} />
                <Profile />
            </header>
        </>
    );
}