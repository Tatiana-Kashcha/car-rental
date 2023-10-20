import carHero from '../../images/hero-car.png';
import * as s from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <s.Thumb>
        <h1>The best cars for rent!</h1>
        <s.Img loading="lazy" src={carHero} alt="Cars" />
      </s.Thumb>
    </>
  );
};
