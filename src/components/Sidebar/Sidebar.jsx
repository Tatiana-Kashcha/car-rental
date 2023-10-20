import * as s from './Sidebar.styled';

export const Sidebar = ({ onSideBar }) => {
  return (
    <s.DivSidebar>
      <s.CloseButton
        type="button"
        aria-label="Close"
        onClick={() => {
          onSideBar();
        }}
      >
        <s.IconBtn />
      </s.CloseButton>
      <s.Sidebar>
        <s.List>
          <li>
            <s.StyledLink to="/">Home</s.StyledLink>
          </li>
          <li>
            <s.StyledLink to="/catalog">Catalog</s.StyledLink>
          </li>
          <li>
            <s.StyledLink to="/favorites">Favorites</s.StyledLink>
          </li>
        </s.List>
      </s.Sidebar>
    </s.DivSidebar>
  );
};
