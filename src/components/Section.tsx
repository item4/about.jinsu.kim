import styled from '@emotion/styled';

import styles from '@/core/styles';

export const Section = styled.section`
  margin-bottom: 1.5rem;
`;
export const SubSection = styled.section({
  marginBottom: '0.75rem',
  p: {
    marginLeft: '2.5rem',
    time: {
      fontSize: '0.8rem',
    },
  },
  [`${styles.media_print}`]: {
    marginBottom: '0.5rem',
  },
});
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
export const PageBreak = styled.div({
  [`${styles.media_print}`]: {
    breakBefore: 'page',
    '& ~ section': {
      paddingTop: '0.3cm',
    },
  },
});
