import { HeaderLayout } from "@/components/layout/header";
import WorkspaceHeader from "@/components/workspaceHeader";
import { getService } from "@/service/service";
import React from "react";

export default async function WorkSpacePage({ params, searchParams }) {
    const WS_ID = params?.workspaceId || "";
    const MAIN_TITLE = searchParams?.q || "";
    const RESPONSE_WS = await getService(`/api/v1/workspace/${WS_ID}`);
    const RESPONSE_TK = await getService(`/api/v1/tasks/workspace/${WS_ID}`);
    const PAYLOAD_WS = await RESPONSE_WS?.payload;
    const PAYLOAD_TK = await RESPONSE_TK?.payload;
    return (
        <>
            <HeaderLayout main={MAIN_TITLE} title={PAYLOAD_WS.workspaceName} />
            <main className="px-14 2xl:px-20 py-5 w-full">
                <WorkspaceHeader title={PAYLOAD_WS.workspaceName} isFavorite={PAYLOAD_WS.isFavorite} />
            </main>
        </>
    );
}
