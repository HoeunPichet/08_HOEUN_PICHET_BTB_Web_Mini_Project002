import { z } from "zod";

// Register validation messages
export const registrationSchema = z.object({
    username: z.string()
        .nonempty({ message: "Username is required." })
        .min(3, { message: "Username must be at least 3 characters." })
        .max(50, { message: "Username cannot be greater than 50 characters." })
        .regex(/[a-zA-Z]/, { message: "Username must contain at least one letter." })
        .regex(/^[a-zA-Z0-9_-]+$/, { message: "Username can only contain letters, numbers, underscores, and hyphens." }),
    email: z.string()
        .nonempty({ message: "Email is required." })
        .email({ message: "Please enter a valid email." })
        .max(150, { message: "Email cannot be greater than 150 characters." })
        .trim(),
    password: z.string()
        .nonempty({ message: "Password is required." })
        .min(8, { message: "Password must be at least 8 characters." })
        .max(32, { message: "Password cannot be greater than 32 characters." })
        .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one number." })
        .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character." })
});

// Login validation message
export const loginSchema = z.object({
    email: z.string()
        .nonempty({ message: "Email is required." })
        .trim(),
    password: z.string()
        .nonempty({ message: "Password is required." }),
});