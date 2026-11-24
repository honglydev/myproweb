export type Language = 'en' | 'kh';
export type SkillCategory = 'frontend' | 'backend' | 'android' | 'database' | 'tools';
export type ProjectCategory = 'all' | 'web' | 'android' | 'backend';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
  tag: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'android' | 'backend';
  typeLabel: string;
  year: string;
  summary: string;
  fullDescription: string;
  tech: string[];
  highlights: string[];
  accentGradient: string;
  demoUrl: string;
  repoUrl: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: 'work' | 'education';
  description: string;
  tags: string[];
}