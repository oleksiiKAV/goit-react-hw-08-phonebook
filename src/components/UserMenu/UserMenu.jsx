import { useDispatch, useSelector } from "react-redux";
import { LogoutStyled, WrapStyled } from "./UserMenuStyled";
import { logoutUser } from "redux/auth/authOperations";
import { selectLogout } from "redux/auth/authSelector";

const UserMenu = () => {
  const dispatch = useDispatch();
    return (
      <WrapStyled>
        <p>{useSelector(selectLogout)}</p>
        <LogoutStyled type="button" onClick={() => dispatch(logoutUser())}>
          Logout
        </LogoutStyled>
      </WrapStyled>
    );
}

export default UserMenu;