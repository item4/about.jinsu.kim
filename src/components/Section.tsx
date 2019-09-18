import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 1.5rem;
`;
export const SubSection = styled(Section)`
  p {
    margin-left: 2.5rem;

    time {
      font-size: 0.8rem;
    }
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
