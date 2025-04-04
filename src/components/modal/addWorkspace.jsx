"use client"
import React, { useState } from 'react'
import {
    AlertDialog,
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

export const AddWorkspace = ({ id, name, type }) => {
    // Default error message
    const [errors, setErrors] = useState({});

    // Default input field value
    const [formData, setFormData] = useState({
        workspaceName: name ? name : ""
    });

    // Assign value to input field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Apply workspace action when submitting form
    const handleWorkspace = async (formData) => {
        const RESPONSE = await createWorkspaceAction(id, formData);
        if (typeof RESPONSE !== "undefined") {
            setErrors(RESPONSE);
        } else {
            setErrors({});
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="cursor-pointer w-fit">
                {!type &&
                    <Image src="/add-square.svg" width={24} height={24} alt="Add Workspace" />
                }
                {type &&
                    <Image src={"/more.svg"} width={24} height={24} alt="More" />
                }
            </AlertDialogTrigger>
            <AlertDialogContent className={"bg-white border-0 rounded-2xl"}>
                <form action={handleWorkspace}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={"text-charcoal font-semibold text-xl"}>{!type ? "Create New Workspace" : "Edit Workspace"}</AlertDialogTitle>
                        <AlertDialogDescription className="mt-5 mb-5">

                            <Label
                                htmlFor="workspace"
                                className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
                            >
                                <BriefcaseBusiness size={20} /> Workspace name
                            </Label>

                            <Input
                                id="workspace"
                                type="text"
                                name="workspaceName"
                                value={formData.workspaceName}
                                placeholder="Please type your workspace"
                                onChange={handleChange}
                                className={`bg-ghost-white ring-persian-green py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90 ${errors.workspaceName ? "!border-red-500" : "border-light-steel-blue"}`}
                            />
                            {errors.workspaceName && <ErrorMessage message={errors?.workspaceName[0]} />}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className={"cursor-pointer px-5 h-10 text-base border-0 bg-red-500 text-white rounded-lg"}>
                            <span>Cancel</span>
                        </AlertDialogCancel>
                        <button type="submit" className="cursor-pointer px-5 h-10 text-base bg-persian-green text-white rounded-lg">
                            <span>{!type ? "Create" : "Update"}</span>
                        </button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>

    )
}
