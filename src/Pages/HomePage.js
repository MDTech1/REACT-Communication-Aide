import classes from "./HomePage.module.css";
import SingleChoice from "../Components/SingleChoice";
import Data from "../Data/Data.json";
import { useRef } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const label = useRef("");
  const imgUrl = useRef("");
  return (
    <div className={classes.Main}>
      <h1>Home Page</h1>
      <div className={classes.Options}>
        {Data.map((data) => {
          return (
            <div key={data.label}>
              <Link to={`/Categories/${data.label}`}>
                {
                  <SingleChoice
                    imgUrl={data.imgUrl}
                    label={data.label}
                    key={data.label}
                  />
                }
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
