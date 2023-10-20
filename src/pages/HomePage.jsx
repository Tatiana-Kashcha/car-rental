import { Section } from 'components/Section/Section';
import { Hero } from 'components/Hero/Hero';
import { Description } from 'components/Description/Description';
import { BurgerBtn } from 'components/BurgerBtn/BurgerBtn';

const HomePage = () => {
  return (
    <>
      <Section>
        <BurgerBtn />
        <Hero />
        <Description />
      </Section>
    </>
  );
};
export default HomePage;
