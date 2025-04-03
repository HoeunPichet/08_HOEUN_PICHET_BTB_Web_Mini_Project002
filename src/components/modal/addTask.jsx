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
import { BriefcaseBusiness, CalendarRange, NotebookText, Plus, Tag } from "lucide-react";
import ErrorMessage from '../messages/errorMessage';
import { createTaskAction } from '@/action/task-action';
import { taskTag } from '@/data/taskTag';

export const AddTask = ({ id }) => {
    // Default error message
    const [errors, setErrors] = useState({});

    // Apply register action when submitting form
    const handleTask = async (formData) => {
        const RESPONSE = await createTaskAction(id, formData);
        if (typeof RESPONSE !== "undefined") {
            setErrors(RESPONSE);
        } else {
            setErrors({});
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-royal-blue flex gap-2 px-5 py-2.5 text-lg rounded-2xl cursor-pointer">
                <Plus size={24} className="text-white" />
                <span className="text-white">New Task</span>
            </AlertDialogTrigger>
            <AlertDialogContent className={"bg-white border-0 rounded-2xl w-full md:max-w-2xl"}>
                <form action={handleTask}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={"text-charcoal font-semibold text-xl"}>Create New Task</AlertDialogTitle>
                        <div className="mt-5 mb-7 grid grid-cols-2 w-full gap-x-3 gap-y-6">
                            {/* Task Title */}
                            <div className="w-full">
                                <Label
                                    htmlFor="task-title"
                                    className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
                                >
                                    <BriefcaseBusiness size={20} /> Task Title
                                </Label>

                                <Input
                                    id="task-title"
                                    type="text"
                                    name="taskTitle"
                                    placeholder="Please type your task title"
                                    className={`bg-ghost-white ring-persian-green py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90 ${errors.taskTitle ? "!border-red-500" : "border-light-steel-blue"}`}
                                />
                                {errors.taskTitle && <ErrorMessage message={errors?.taskTitle[0]} />}
                            </div>
                            {/* Description */}
                            <div className="w-full">
                                <Label
                                    htmlFor="description"
                                    className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
                                >
                                    <NotebookText size={20} /> Description
                                </Label>

                                <Input
                                    id="description"
                                    type="text"
                                    name="taskDetails"
                                    placeholder="Please type your description"
                                    className={`bg-ghost-white ring-persian-green py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90 border-light-steel-blue`}
                                />
                            </div>
                            {/* Task Tag */}
                            <div className="w-full">
                                <Label
                                    htmlFor="task-tag"
                                    className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
                                >
                                    <Tag size={20} /> Tag
                                </Label>

                                <select
                                    name="tag"
                                    id="task-tag"
                                    className={`bg-ghost-white ring-persian-green text-sm border py-[0.55rem] px-4 rounded-lg w-full text-light-steel-blue/90 ${errors.tag ? "!border-red-500" : "border-light-steel-blue"}`}
                                >
                                    <option value="">-- Select --</option>
                                    {taskTag.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))

                                    }
                                </select>
                                {errors.tag && <ErrorMessage message={errors?.tag[0]} />}
                            </div>
                            {/* End Date */}
                            <div className="w-full">
                                <Label
                                    htmlFor="end-date"
                                    className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
                                >
                                    <CalendarRange size={20} /> End Date
                                </Label>

                                <Input
                                    id="end-date"
                                    type="date"
                                    name="endDate"
                                    className={`inline bg-ghost-white ring-persian-green py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90 ${errors.endDate ? "!border-red-500" : "border-light-steel-blue"}`}
                                />
                                {errors.endDate && <ErrorMessage message={errors?.endDate[0]} />}
                            </div>
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className={"cursor-pointer px-5 h-10 text-base border-0 bg-red-500 text-white rounded-lg"}>
                            <span>Cancel</span>
                        </AlertDialogCancel>
                        <button type="submit" className="cursor-pointer px-5 h-10 text-base bg-persian-green text-white rounded-lg">
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
