export interface ProfileConfig {
  name: string;
  chineseName: string;
  role: string;
  department: string;
  institution: string;
  location: string;
  primaryEmail: string;
  permanentEmail: string;
  avatarImage: string;
  cvLink: string;
  links: {
    name: string;
    icon: string;
    url: string;
  }[];
}

export interface AnnouncementConfig {
  enabled?: boolean;
  badge?: string;
  title: string;
  description: string;
  date?: string;
  icon?: string;
  link?: string;
}

export interface HomeConfig {
  tagline: string;
  bioParagraphs: string[];
  announcement?: AnnouncementConfig | null;
  highlightBadge?: AnnouncementConfig | null;
}

export interface ResearchCategory {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  items: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  status: 'published' | 'preprint' | 'submitted' | 'in_preparation';
  pdf?: string;
  doi?: string;
  arxiv?: string;
  abstract?: string;
  bibtex?: string;
  tags?: string[];
}

export interface Collaborator {
  name: string;
  institution?: string;
  url?: string;
}

export interface ResearchConfigData {
  researchStatement: string;
  researchCategories: ResearchCategory[];
  publications: Publication[];
  keyMathTopics: {
    title: string;
    formulaLaTeX: string;
    description: string;
  }[];
  collaborators: Collaborator[];
}

export interface Course {
  code?: string;
  name: string;
  semester?: string;
  level?: 'Undergraduate' | 'Graduate';
  description?: string;
  notesLink?: string;
  syllabusLink?: string;
}

export interface TeachingExperience {
  institution: string;
  role: string;
  years: string;
  courses: string; // Summary line or detail
  courseList?: Course[];
}

export interface Talk {
  id: string;
  date: string;
  event: string;
  title?: string;
  location?: string;
  link?: string;
  slidesLink?: string;
  type?: 'upcoming' | 'past';
}

export interface TeachingConfigData {
  teachingStatement: string;
  experience: TeachingExperience[];
  talks: Talk[];
  officeHours?: {
    time: string;
    location: string;
    notes?: string;
  };
  studentResources?: {
    title: string;
    description: string;
    url: string;
    icon?: string;
  }[];
}

export interface ContactConfig {
  affiliation: string;
  primaryEmail: string;
  permanentEmail: string;
  address: string;
  office?: string;
}

export interface MiscLink {
  name: string;
  url: string;
  isPdf?: boolean;
  category?: string;
  icon?: string;
}

export interface SiteConfigData {
  profile: ProfileConfig;
  home: HomeConfig;
  contact: ContactConfig;
  miscLinks: MiscLink[];
}
