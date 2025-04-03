"use client"
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BriefcaseBusiness, KeyRound } from "lucide-react";
import Image from 'next/image'
import { createWorkspaceAction } from '@/action/workspace-action';
import ErrorMessage from '../messages/errorMessage';

export const AddWorkspace = () => {
    // Default error message
    const [errors, setErrors] = useState({});

    // Apply register action when submitting form
    const handleWorkspace = async (formData) => {
        const RESPONSE = await createWorkspaceAction(formData);
        if (typeof RESPONSE !== "undefined") {
            setErrors(RESPONSE);
        } else {
            setErrors({});
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Image src="/add-square.svg" width={24} height={24} alt="Add Workspace" />
            </AlertDialogTrigger>
            <AlertDialogContent className={"bg-white border-0 rounded-2xl"}>
                <form action={handleWorkspace}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={"text-charcoal font-semibold text-xl"}>Create New Workspace</AlertDialogTitle>
                        <AlertDialogDescription className="mt-5 mb-5">

                            <Label
                                htmlFor="workspace"
                                className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
                            >
                                <BriefcaseBusiness size={20} /> Workspace name
                            </Label>

                            <Input
                                type="workspace"
                                name="workspaceName"
                                placeholder="Please type your workspace"
                                className={`bg-ghost-white ring-persian-green py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90 ${errors.workspaceName ? "!border-red-500" : "border-light-steel-blue"}`}
                            />
                            {errors.workspaceName && <ErrorMessage message={errors?.workspaceName[0]} />}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className={"px-5 h-10 text-base border-0 bg-red-500 text-white rounded-lg"}>
                            <span>Cancel</span>
                        </AlertDialogCancel>
                        <button type="submit" className="px-5 h-10 text-base bg-persian-green text-white rounded-lg">
                            <span>Create</span>
                        </button>
                        {/* <AlertDialogAction>
                        </AlertDialogAction> */}
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>

    )
}
