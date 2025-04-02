import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Workspace({ href, name, color }) {
    return (
        <Link href={href} className="flex w-full justify-between items-center gap-3 px-7 bg-slate-100 rounded-lg py-3">
            <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${color}`}></div>
                <h3 className="text-charcoal text-xl font-medium">{name}</h3>
            </div>
            <div className="">
                <Image src={"/more.svg"} width={24} height={24} alt="More" />
            </div>
        </Link >
    );
}
