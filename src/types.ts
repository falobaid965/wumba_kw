export type Language = 'EN' | 'AR';

export interface NavLink {
  label: Record<Language, string>;
  href: string;
}

export interface Product {
  id: string;
  name: Record<Language, string>;
  category: Record<Language, string>;
  price: string;
  image: string;
  whatsappMessage: Record<Language, string>;
}

export interface Benefit {
  icon: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export interface Testimonial {
  content: Record<Language, string>;
  author: string;
}
