import {z} from 'zod';

export const formSchema = z.object({
topic: z.string().min(3).max(100),
category: z.string().min(3).max(20),
description: z.string().min(10)
})