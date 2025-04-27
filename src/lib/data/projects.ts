export type Project = {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: 'example project',
    description: 'this is just an example for the website',
    link: 'this.doesntwork.com',
    tags: ['testing', 'messing around', 'nonesense']
  },
]
