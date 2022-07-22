import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// my css
import "./Navbar.css";
import axios from "axios";
import { useState, useEffect } from "react";
// button
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);



  //   prods map--------------
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get("http://localhost:8080/products");
        // // console.log(response);
        let myProds = await response.data;
        setData(myProds);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);
  console.log(data);

  // ------------------------
  return (
    <div className="grid">
      {data.map((e,index) => {
        return (
          <div key={e.title}>
            <Card sx={{ maxWidth: 320, maxHeight: 550 }} className="mycard" >
              <>
                <CardHeader
                  // title---------------
                  title={<h6>{e.title.substring(0, 20)}</h6>}
                  className="cardsmall"
                />
                <CardMedia
                  component="img"
                  height="220"
                  // image------------
                  image={e.image}
                  alt={e.title}
                />
                <CardContent>
                  <h3>${e.price}</h3>
                  <Typography variant="body2" color="text.secondary">
                    {/* description--------- */}
                    <span>{e.description.substring(0, 100)}</span>
                  </Typography>
                </CardContent>
            
                <div className="buttons">
                  <Button variant="contained"><Link to={`/products/${e.id}`}>View</Link>  </Button>
                  <Button variant="contained">Add to Cart</Button>
                </div>
              </>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
