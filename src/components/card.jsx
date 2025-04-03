"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { saveService } from "@/service/service";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

export default function CardComponent(props) {
  let COLOR = "";
  if (props?.status == "IN_PROGRESS")
    COLOR = "royal-blue";
  else if (props?.status == "FINISHED")
    COLOR = "persian-green";
  else
    COLOR = "watermelon-red";

  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{props?.title}</h2>
          <Ellipsis />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {props?.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {props?.tag}
          </p>

          {/* status */}
          <div className={`rounded-full w-8 h-8 bg-${COLOR}`}></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-36 truncate border-${COLOR} text-${COLOR}`}
          >
            <SelectValue placeholder={props?.status || "NOT_STARTED"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> {props?.date}
        </p>
      </div>
    </div>
  );
}
