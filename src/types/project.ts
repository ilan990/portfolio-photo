export type ProjectCategory = 'residential' | 'commercial' | 'editorial';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  date: string;
  client: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  tags: string[];
  metadata: {
    title: string;
    description: string;
  };
}

export interface ProjectPreview {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  coverImage: string;
  shortDescription: string;
}
