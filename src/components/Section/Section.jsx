import * as s from './Section.styled';

export const Section = ({ title, children }) => (
  <s.Section>
    {title && <s.SectionTitle>{title}</s.SectionTitle>}
    {children}
  </s.Section>
);
