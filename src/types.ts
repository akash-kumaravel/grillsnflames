/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'work' | 'services' | 'about' | 'contact';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'kitchen' | 'fire' | 'pavilion';
  heroImage: string;
  description: string;
  fullStory: string;
  keyFeatures: string[];
  gallery: string[];
  specs: ProjectSpec[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  tagline?: string;
  longDescription?: string;
  features?: string[];
  specifications?: { label: string; value: string }[];
  gallery?: string[];
}
