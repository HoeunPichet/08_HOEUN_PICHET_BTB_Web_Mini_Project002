import React from "react";
import Image from "next/image";
import Workspace from "../workspace";
import Logo from "../logo";

export const Sidebar = () => {
    return (
        <aside className="w-full max-w-sm px-2 broder-r h-screen max-h-screen overflow-auto flex flex-col gap-5 py-5 shadow shadow-gray-300">
            <div className="py-8 flex w-full justify-center items-center">
                <Logo />
            </div>
            {/* Workspace Section */}
            <section className="grid w-full h-1/3 content-start">
                <div className="flex w-full justify-between items-center gap-5 px-7">
                    <h2 className="font-semibold text-2xl text-light-steel-blue">Workspace</h2>
                    <button type="button">
                        <Image src="./add-square.svg" width={24} height={24} alt="Add Workspace" />
                    </button>
                </div>
                <div className="flex flex-col gap-1 mt-4 h-full overflow-auto">
                    <Workspace />
                    <Workspace />
                </div>
            </section>
            {/* Favorite Section */}
            <section className="grid w-full h-1/3 content-start mt-5">
                <div className="flex w-full justify-between items-center gap-5 px-7">
                    <h2 className="font-semibold text-2xl text-light-steel-blue">Favorite</h2>
                    <button type="button">
                        <Image src="./star.svg" width={24} height={24} alt="Star" />
                    </button>
                </div>
                <div className="flex flex-col gap-1 mt-4 h-full overflow-auto">
                    <Workspace />
                    <Workspace />
                    <Workspace />
                    <Workspace />
                </div>
            </section>

            <footer className="mt-7 px-7 flex gap-3 w-full">
                <Image src="./logout.svg" width={24} height={24} alt="Logout" />
                <h3 className="font-semibold text-xl text-light-steel-blue">Logout</h3>
            </footer>
        </aside>
    );
}