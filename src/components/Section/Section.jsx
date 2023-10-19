import * as s from './Section.styled';

export const Section = ({ title, children }) => (
  <s.Section>
    <s.Container>
      {title && <s.SectionTitle>{title}</s.SectionTitle>}
      {children}
    </s.Container>
  </s.Section>
);
