"use client";
import { loginAction } from "@/action/login-action";
import ErrorMessage from "@/components/messages/errorMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginComponent() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Default error message
  const [errors, setErrors] = useState({});

  // State for loading
  const [isPending, setIsPending] = useState(false);

  // Apply register action when submitting form
  const handleLogin = async (formData) => {
    setIsPending(true);
    const RESPONSE = await loginAction(formData);
    if (typeof RESPONSE !== "undefined") {
      setErrors(RESPONSE);
    } else {
      setErrors({});
    }
    setIsPending(false);
  }
  return (
    <form action={handleLogin} className="space-y-6 bg-white">
      {/* email */}
      <div>
        <Label
          htmlFor="email"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <Mail size={20} /> Email
        </Label>

        <Input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Please type your email"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90 ${errors.email && "border-red-500"}`}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage message={errors?.email[0]} />}
      </div>

      {/* password */}
      <div>
        <Label
          htmlFor="password"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <KeyRound size={20} /> Password
        </Label>

        <Input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Please type your password"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90 ${errors.password && "border-red-500"}`}
          onChange={handleChange}
        />
        {errors.password && <ErrorMessage message={errors?.password[0]} />}
        {errors.incorrect && <ErrorMessage message={errors?.incorrect[0]} />}
      </div>

      {/* sign in button */}
      <Button
        type="submit"
        className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold"
      >
        {isPending ? "Logging in..." : "Log in"}
      </Button>

      {/* underline */}
      <div>
        <div className="border-b border-b-light-steel-blue"></div>
        <div className="capitalize text-right mt-2 font-normal">
          create new accont?{" "}
          <Link
            href={"/register"}
            className="text-persian-green hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* sign in with google */}
      <div className=" bg-ghost-white rounded-lg text-center">
        <Button className="flex gap-2 items-start justify-center w-full bg-ghost-white text-charcoal shadow-none hover:bg-ghost-white/50">
          <img src="/Google Icon.svg" alt="google icon" /> Login with google
        </Button>
      </div>
    </form>
  );
}
