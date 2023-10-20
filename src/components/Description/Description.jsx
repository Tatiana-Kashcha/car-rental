import * as s from './Description.styled';
import support24 from '../../images/24-hours-support.png';
import online from '../../images/online.png';
import premium from '../../images/premium.png';
import credit from '../../images/credit.png';

export const Description = () => {
  return (
    <s.Descr>
      <s.Advant>
        <h2>Our advantages</h2>
        <s.List>
          <s.ListItem>
            <img loading="lazy" src={support24} alt="24 hours" />
            <s.Text>24/7 customer support</s.Text>
          </s.ListItem>
          <s.ListItem>
            <img loading="lazy" src={online} alt="24 hours" />
            <s.Text>Online ordering on the website</s.Text>
          </s.ListItem>
          <s.ListItem>
            <img loading="lazy" src={premium} alt="24 hours" />
            <s.Text>Own car quality department</s.Text>
          </s.ListItem>
          <s.ListItem>
            <img loading="lazy" src={credit} alt="24 hours" />
            <s.Text>Cashless payments</s.Text>
          </s.ListItem>
        </s.List>
      </s.Advant>
      <s.Cont>
        <h2>Contacts</h2>
        <s.Text>+380730000000</s.Text>
      </s.Cont>
    </s.Descr>
  );
};
