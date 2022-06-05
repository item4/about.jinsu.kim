import styled from '@emotion/styled';

import { media_print } from '../utils/styles';

export const Section = styled.section`
  margin-bottom: 1.5rem;
`;
export const SubSection = styled.section`
  margin-bottom: 0.75rem;

  p {
    margin-left: 2.5rem;

    time {
      font-size: 0.8rem;
    }
  }

  @media print {
    margin-bottom: 0.5rem;
  }
`;
export const SectionTitle = styled.h2`
  border-bottom: 1px dotted #aaa;
  margin-bottom: 0.5rem;
`;
export const SubSectionTitle = styled.h3`
  margin-left: 1rem;
  margin-right: 1rem;

  a {
    text-decoration: none;
  }
`;
export const PageBreak = styled.div`
  ${media_print} {
    break-before: page;

    & ~ section {
      padding-top: 0.3cm;
    }
  }
`;
