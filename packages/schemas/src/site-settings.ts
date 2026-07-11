import { z } from "zod";

export const siteSettingsSchema = z.object({
  siteName: z.string().min(1),
  logo: z.string().optional(),
  logoLight: z.string().optional(),
  tagline: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  whatsapp: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  workingHours: z.string().optional(),
  socialLinks: z
    .object({
      instagram: z.string().url().optional().or(z.literal("")),
      linkedin: z.string().url().optional().or(z.literal("")),
      github: z.string().url().optional().or(z.literal("")),
      twitter: z.string().url().optional().or(z.literal("")),
    })
    .optional(),
  seoDefaults: z
    .object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      ogImage: z.string().optional(),
    })
    .optional(),
});

export type SiteSettingsInput = z.infer<typeof siteSettingsSchema>;