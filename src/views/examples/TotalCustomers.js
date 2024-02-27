import { Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { Card, CardBody, CardText, CardTitle, Container } from "reactstrap";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import CardCounter from "./CardCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stat_student from "assets/img/stats/stat_student.png";
import stat_teachers from "assets/img/stats/stat_teachers.png";
import stat_admin from "assets/img/stats/stat_admin.png";

function TotalCustomers() {
  const [count, setCount] = useState(0);
  const endNumber = 100;
  const intervalDuration = 15;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, intervalDuration); // Adjust interval duration as needed

    return () => clearInterval(interval);
  }, [count, endNumber]);
  return (
    <Container>
      <div className="title">
        <h2>L'ISIMM en chiffres</h2>
      </div>
      <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
        <Grid item xs={12} md={4}>
          <CardCounter
            title={"Etudiants"}
            endNumber={1500}
            image={stat_student}
            intervalDuration={0.1}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardCounter
            title={"Enseignants"}
            endNumber={120}
            image={stat_teachers}
            intervalDuration={25}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardCounter
            title={"Administrateurs"}
            endNumber={25}
            image={stat_admin}
            intervalDuration={40}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TotalCustomers;
