import React from "react";
import SolutionCard from "../common/SolutionCard";
import "./landingpage.css";
import icon from "../../assets/marketing image.svg";
import icon1 from '../../assets/design.svg'
import icon2 from '../../assets/hr.svg'
import icon3 from '../../assets/finance.svg'
import icon4 from '../../assets/gov.svg'
import icon5 from '../../assets/bussiness.svg'
import icon6 from '../../assets/customer.svg'
import icon7 from '../../assets/pm.svg'
import { Grid } from "@mui/material";
const dataList = [
  {
    title: "Marketing & Communication",
    description: "237 Jobs Available",
    icon: icon,
  },
  {
    title: "Design & Development",
    description: "237 Jobs Available",
    icon: icon1,
  },
  {
    title: "Human Research & Development",
    description: "237 Jobs Available",
    icon: icon2,
  },
  {
    title: "Finance Management",
    description: "237 Jobs Available",
    icon: icon3,
  },
  {
    title: "Government Jobs",
    description: "237 Jobs Available",
    icon: icon4,
  },
  {
    title: "Business & Consulting",
    description: "237 Jobs Available",
    icon: icon5,
  },
  {
    title: "Customer Support Care",
    description: "237 Jobs Available",
    icon: icon6,
  },
  {
    title: "Project Management",
    description: "237 Jobs Available",
    icon: icon7,
  },
];
function OnePlateform() {
  return (
    <div className="onePlateform-container">
      <h1>
        One Plateform many <span>Solution</span>
      </h1>
      <Grid container 
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}

    
      >
        {dataList.map((e, i) => (
          <SolutionCard
            title={e.title}
            description={e.description}
            icon={e.icon}
            key={i}
          />
        ))}
      </Grid>
      <br/><br/>
    </div>
  );
}

export default OnePlateform;
