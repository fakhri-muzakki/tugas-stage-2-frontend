import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility untuk menggabungkan className Tailwind dengan aman
 * - Support conditional class (clsx)
 * - Handle conflict Tailwind (tailwind-merge)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
