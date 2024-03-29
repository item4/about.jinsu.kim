export interface RelatedLink {
  name: string;
  url: string;
}
export interface WorkExperience {
  name: string;
  url?: string;
  position: string;
  started_at: string;
  ended_at: string;
  total_summary: string;
  tasks: {
    summary: string;
    desc: string[];
    keywords: string[];
  }[];
  break_before: boolean;
}
export interface ContributionDetail {
  url: string;
  number: number;
}
export interface Contribution {
  name: string;
  url: string;
  group: number;
  order: number;
  items: ContributionDetail[];
}
export interface NotablePoint {
  name: string;
  url: string;
  descriptions: string[];
}
export interface ProjectKeywordMap {
  [category: string]: string[];
}
export interface Project {
  repo_url: string;
  keywords: string[];
}
