import logo from "../Data/HomeLogo.png";
import classes from "../Components/ComponentCss/NavBar.module.css";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="food" className={classes.logoImg} />
      </Link>
    </div>
  );
}

export default Navigation;
