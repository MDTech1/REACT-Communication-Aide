import { useParams, Link } from "react-router-dom";
import classes from "./CategoriesPage.module.css";
import Data from "../Data/Data.json";
import SingleChoice from "../Components/SingleChoice";

import { DataContext } from "../Components/DataContext";
import { useContext, useState } from "react";

function DisplayCategories(props) {
  const { id } = useParams();
  const [option, setOption] = useState("");

  return (
    <div className={classes.Main}>
      <h1>{id}</h1>
      {Data.filter((val) => {
        return val.label === id;
      }).map((data, index) => {
        return (
          <div className={classes.Options}>
            {data.additionalCategories.map((data2) => {
              return (
                <Link to={`/Option/${data2.label}+${data.label}`} state="test">
                  {<SingleChoice imgUrl={data2.imgUrl} label={data2.label} />}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DisplayCategories;
