declare module '@/data/work-experiences.json' {
  import type { WorkExperience } from '@/types/resume';
  const data: WorkExperience[];
  export = data;
}

declare module '@/data/related-links.json' {
  import type { RelatedLink } from '@/types/resume';
  const data: RelatedLink[];
  export = data;
}

declare module '@/data/contributions.json' {
  import type { Contribution } from '@/types/resume';
  const data: Contribution[];
  export = data;
}

declare module '@/data/notable-points.json' {
  import type { NotablePoint } from '@/types/resume';
  const data: NotablePoint[];
  export = data;
}
