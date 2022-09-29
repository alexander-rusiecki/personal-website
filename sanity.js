import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from 'config/sanityConfig';

export const sanityClient = createClient(sanityConfig);

export const urlFor = source =>
  createImageUrlBuilder(sanityConfig).image(source);
