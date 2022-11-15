import SingleChoice from "../Components/SingleChoice";
import { useParams, useLocation } from "react-router-dom";
import classes from "../Pages/PageClasses/SingleChoiceClass.module.css";
import { useState } from "react";
import Data from "../Data/Data.json";
function SingleChoicePage() {
  const { id } = useParams();
  const option = id.substring(0, id.indexOf("+"));
  const category = id.substring(id.indexOf("+") + 1);

  let current = Data.filter((val) => {
    return val.label === category;
  })[0].additionalCategories.filter((item) => {
    return item.label === option;
  })[0];
  console.log(current.imgUrl);

  return (
    <>
      <div className={classes.singleItem}>
        {<SingleChoice imgUrl={current.imgUrl} label={current.label} />}
      </div>
    </>
  );
}

export default SingleChoicePage;
