
export interface User {
  name: string;
  email: string;
  isVerified: boolean;
  pictureUrl?: string;
  university?: string;
  fieldOfStudy?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  tag: 'Free' | 'Exclusive';
  date: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export enum PageType {
  Home = 'Home',
  Blog = 'Blog',
  Admin = 'Admin',
}

export type Page = PageType.Home | PageType.Blog | PageType.Admin;
