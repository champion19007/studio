// src/ai/ai-about-me.ts
'use server';
/**
 * @fileOverview A flow to generate an 'About Me' section using AI.
 *
 * - generateAboutMe - A function that triggers the AI-powered 'About Me' section generation.
 * - GenerateAboutMeInput - The input type for the generateAboutMe function.
 * - GenerateAboutMeOutput - The output type for the generateAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeInputSchema = z.object({
  name: z.string().describe('Your name.'),
  profession: z.string().describe('Your profession or title.'),
  skills: z.string().describe('A comma-separated list of your skills.'),
  experience: z.string().describe('A brief summary of your experience.'),
  style: z.string().describe('The desired tone or style of the introduction (e.g., professional, friendly, creative).'),
});
export type GenerateAboutMeInput = z.infer<typeof GenerateAboutMeInputSchema>;

const GenerateAboutMeOutputSchema = z.object({
  aboutMe: z.string().describe('The generated About Me section.'),
});
export type GenerateAboutMeOutput = z.infer<typeof GenerateAboutMeOutputSchema>;

export async function generateAboutMe(input: GenerateAboutMeInput): Promise<GenerateAboutMeOutput> {
  return generateAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: GenerateAboutMeInputSchema},
  output: {schema: GenerateAboutMeOutputSchema},
  prompt: `Generate a professional 'About Me' section for a portfolio website based on the following information:

Name: {{{name}}}
Profession: {{{profession}}}
Skills: {{{skills}}}
Experience: {{{experience}}}
Style: {{{style}}}

Please ensure the generated content is engaging, concise, and highlights the individual's key strengths and experiences.`,
});

const generateAboutMeFlow = ai.defineFlow(
  {
    name: 'generateAboutMeFlow',
    inputSchema: GenerateAboutMeInputSchema,
    outputSchema: GenerateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
