import { SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID } from '$env/static/private';
import { createClient } from '@sanity/client';
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

export async function getHomepage(): Promise<Home> {
  return await client.fetch(groq`*[_type == "home"][0]{_id,  overview, title}`);
}

export async function getNavigation(): Promise<Navigation> {
  return await client.fetch(groq`*[_type == "settings"][0]{
    menuItems[]->{
      _type,
      title,
      "slug": slug.current
    }
  }`);
}

export async function getImprint(): Promise<Imprint> {
  return await client.fetch(groq`*[_type == "imprint"][0]`);
}

export interface Pet {
  _type: 'pet';
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  name: string;
}

export interface Home {
  _id: string;
  _type: 'home';
  title: string;
  overview: Overview[];
}

interface GenericChildren {
  _key: string;
  _type: string;
  marks: [];
  text: string;
}

interface GenericBlock {
  _key: string;
  _type: 'block';
  children: GenericChildren[];
}

export interface OverviewChildren {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface Overview {
  _key: string;
  _type: string;
  children: OverviewChildren[];
  markDefs: any[];
  style: string;
}

export interface MenuItem {
  _type: string;
  slug?: string;
  title?: string;
}

export interface Navigation {
  menuItems: MenuItem[];
}

export interface Imprint {
  _type: 'imprint';
  _createdAt: string;
  _id: string;
  fullName: string;
  street: string;
  postal: string;
  email: string;
  name: string;
  linkTitle: string;
  linkText: GenericBlock[];
  contentTitle: string;
  contentText: GenericBlock[];
  copyrightTitle: string;
  copyrightText: GenericBlock[];
}
