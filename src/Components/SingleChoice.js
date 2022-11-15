import classes from "./SingleChoice.module.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

function SingleChoiceItem(props) {
  return (
    <div key={props.label} className={classes.Item}>
      <img src={props.imgUrl} alt="food" className={classes.ImgClass} />
      <p className={classes.ItemLabel}>{props.label}</p>
    </div>
  );
}

export default SingleChoiceItem;
