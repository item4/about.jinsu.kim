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
  tasks: {
    summary: string;
    desc: string[];
    keywords: string[];
  }[];
}
export interface ContributionDetail {
  type: 'issue' | 'pr';
  url: string;
  number: string;
}
export interface Contribution {
  name: string;
  url: string;
  items: ContributionDetail[];
}
export interface NotablePoint {
  name: string;
  url: string;
  descriptions: string[];
}
