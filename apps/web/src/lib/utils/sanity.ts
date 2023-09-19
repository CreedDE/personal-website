import { SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID } from '$env/static/private';
import { createClient } from '@sanity/client';
import type { Slug } from '@sanity/types';
import groq from 'groq';

if (!SANITY_STUDIO_DATASET || !SANITY_STUDIO_PROJECT_ID) {
  throw new Error("You did't set your environment variables");
}
export const client = createClient({
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  useCdn: false,
  apiVersion: '2021-10-21'
});

export async function getPets(): Promise<Pet[]> {
  return await client.fetch(groq`*[_type == "pet"] | order(_createdAt desc)`);
}

export interface Pet {
  _type: 'pet';
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  name: string;
}
