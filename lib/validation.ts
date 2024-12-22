import { z } from 'zod';

export const formSchema = z.object({
  topic: z.string().min(3).max(100),
  category: z.string().min(3).max(20),
  description: z.string().min(10),
  image: z.instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, { 
      message: "Image size should be less than 5MB",
    })
    .refine((file) => ['image/jpeg', 'image/png', 'image/svg+xml'].includes(file.type), {
      message: "Unsupported file type. Only JPG, PNG, or SVG are allowed",
    })
});
