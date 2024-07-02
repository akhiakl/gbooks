import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generatePreviewUrl = (id: string) => {
  return `https://books.google.com/books?id=${id}&printsec=frontcover&source=entity_page&newbks=0`
}