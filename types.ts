export enum Page {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface StrategyResponse {
  headline: string;
  platforms: string[];
  hook: string;
  advice: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}