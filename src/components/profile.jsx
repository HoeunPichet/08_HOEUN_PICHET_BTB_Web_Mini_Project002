import React from "react";
import Image from "next/image";
import { getService } from "@/service/service";

export default async function Profile() {
    const RESPONSE = await getService("/api/v1/user");
    const PAYLOAD = await RESPONSE?.payload || "";
    console.log(PAYLOAD)
    return (
        <div className="flex gap-6">
            <Image src={"./notification.svg"} width={24} height={24} alt="Notification" />
            <div className="flex items-center gap-4">
                {PAYLOAD?.profile &&
                    <Image src={PAYLOAD?.profile} className="rounded-full object-cover" width={36} height={36} alt="Profile" />
                }
                <dl className="flex flex-col">
                    <dt>{PAYLOAD?.username ?? ""}</dt>
                    <dd className="text-sm text-persian-green font-light">{PAYLOAD?.email ?? ""}</dd>
                </dl>
            </div>
        </div>
    );
}
