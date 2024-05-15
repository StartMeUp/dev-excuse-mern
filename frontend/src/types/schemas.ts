import z from "zod";

export const excuseSchema = z.object({
  _id: z.string().optional(),
  http_code: z.number(),
  message: z.string(),
  tag: z.string(),
});
export type Excuse = z.infer<typeof excuseSchema>;

export const excusesSchema = z.array(excuseSchema);
export type Excuses = z.infer<typeof excusesSchema>;

const responseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.unknown().or(z.null()),
});

export const excuseResponseSchema = responseSchema.merge(
  z.object({ data: excuseSchema }),
);
export const excusesResponseSchema = responseSchema.merge(
  z.object({ data: excusesSchema }),
);
