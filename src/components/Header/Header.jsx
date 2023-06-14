import { Menu, UserMenu } from "components";
import { HeaderStyled } from "./Header.styled";
import { useSelector } from "react-redux";
import { selectIsAuth } from "redux/auth/authSelector";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  return <HeaderStyled>
    <Menu />
    {isAuth && <UserMenu/>}
  </HeaderStyled>;
};

export default Header;
