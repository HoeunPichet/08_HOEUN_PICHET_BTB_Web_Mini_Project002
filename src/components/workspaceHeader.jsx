import Image from "next/image";
import React from "react";

export default function WorkspaceHeader() {
    return (
        <div className="flex w-full justify-between items-center gap-3 py-3">
            <h3 className="text-charcoal text-2xl font-bold">HRD Design</h3>
            <div className="bg-slate-100 p-1 rounded-md">
                <svg className="fill-amber-500 stroke-amber-500" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2697 8.25437C21.2255 8.58033 21.6857 9.99919 20.2764 11.3989L17.8988 13.7764C17.4962 14.1791 17.2757 14.9556 17.4003 15.5117L18.081 18.4549C18.6178 20.7845 17.3811 21.6857 15.3199 20.4681L12.4534 18.7712C11.9357 18.4645 11.0825 18.4645 10.5552 18.7712L7.68871 20.4681C5.63711 21.6857 4.3908 20.7749 4.92767 18.4549L5.60835 15.5117C5.73298 14.9556 5.51248 14.1791 5.10983 13.7764L2.73226 11.3989C1.33257 9.99919 1.78316 8.58033 3.73889 8.25437L6.79713 7.74626C7.30524 7.65998 7.9188 7.20939 8.14889 6.73963L9.83619 3.36503C10.7469 1.53392 12.2425 1.53392 13.1629 3.36503L14.8502 6.73963C14.946 6.94096 15.1186 7.14228 15.3199 7.30526" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}
