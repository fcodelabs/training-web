import { useSelector } from "react-redux";
import { TodoCartList } from "./TodoSlice";
import React from "react";

import { Typography } from "@mui/material";

import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const CartList = () => {
  const carts = useSelector(TodoCartList);

  const renderPost = carts?.map((p) => (
    <div key={p.id}>
      <div style={{ margin: 10 }}>
        <Card sx={{ maxWidth: 345, marginLeft: 5 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {p.description.substring(0, 100)}
            </Typography>
          </CardContent>
          <CardActions className="btn">
            <Button style={{ marginLeft: 100 }} size="small">
              SHOW MORE
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  ));

  return (
    <section>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderPost}</div>
    </section>
  );
};

export default CartList;
