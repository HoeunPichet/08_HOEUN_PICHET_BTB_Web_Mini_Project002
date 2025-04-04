import Link from "next/link";
import React from "react";
import { AddWorkspace } from "./modal/addWorkspace";


export default function Workspace({ id, href, name, color }) {
    return (
        <div className="relative w-full">
            <Link href={href} className="flex w-full justify-between items-center gap-3 px-7 hover:bg-slate-200 rounded-lg py-3">
                <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${color}`}></div>
                    <h3 className="text-charcoal text-xl font-semibold">{name}</h3>
                </div>

            </Link>
            <div className="absolute top-1/2 -translate-y-1/2 right-6 cursor-pointer">
                <AddWorkspace id={id} name={name} type={true} />
            </div>
        </div>
    );
}
