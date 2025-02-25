declare module '@/data/work-experiences.json' {
  import type { WorkExperience } from '@/types/resume.ts';

  const data: WorkExperience[];
  export = data;
}

declare module '@/data/related-links.json' {
  import type { RelatedLink } from '@/types/resume.ts';

  const data: RelatedLink[];
  export = data;
}

declare module '@/data/contributions.json' {
  import type { Contribution } from '@/types/resume.ts';

  const data: Contribution[];
  export = data;
}

declare module '@/data/projects.json' {
  import type { ProjectKeywordMap, Project } from '@/types/resume.ts';

  const data: {
    projects: Record<string, Project>;
    keywords: ProjectKeywordMap;
  };
  export = data;
}

declare module '@/data/notable-points.json' {
  import type { NotablePoint } from '@/types/resume.ts';

  const data: NotablePoint[];
  export = data;
}
