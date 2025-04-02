import React from "react";
import RegisterComponent from "../_components/register";
import SweetAlert from "@/components/messages/sweetAlert";

export default function RegisterPage() {

  return (
    <main>
      {/* <SweetAlert message={"Created successfully!"} type={"success"} /> */}
      <div className="space-y-6 w-1/3 min-w-full sm:min-w-sm mx-auto bg-white drop-shadow-light-steel-blue p-12 rounded-3xl ">
        <h1 className="font-bold text-3xl text-center">
          Sign In to Plan<span className="text-watermelon-red">I</span>t{" "}
        </h1>
        <RegisterComponent />

        {/* copyright */}
        <p className="text-center text-light-steel-blue">
          &copy; Copyright | 2025 Monster
        </p>
      </div>
    </main>
  );
}
