// FIX: Import `React` to allow usage of React types like `ElementType`.
import type React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Activity {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface CommandMember {
  name: string;
  rank: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  relation: string;
}