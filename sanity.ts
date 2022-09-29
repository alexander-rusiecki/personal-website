import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityConfig } from './config/sanityConfig';

export const sanityClient = createClient(sanityConfig);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(sanityConfig).image(source);
