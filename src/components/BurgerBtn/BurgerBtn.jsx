import * as s from './BurgerBtn.styled';
import { ReactComponent as BurgerMenuIcon } from '../../icons/burger-menu.svg';
import goCar from '../../images/go-car.png';

export const BurgerBtn = () => {
  return (
    <s.DivBtn>
      <s.BurgerBtn
        type="button"
        //   onClick={() => {
        //     onSideBar();
        //   }}
      >
        <BurgerMenuIcon />
      </s.BurgerBtn>
      <p>Go!</p>
      <s.DivImg>
        <img loading="lazy" src={goCar} alt="Car" />
      </s.DivImg>
    </s.DivBtn>
  );
};
