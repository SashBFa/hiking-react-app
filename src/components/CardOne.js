import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CardOne = (card) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={"./images/card" + card.card.img + ".jpg"}
        alt="card1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.card.description.substring(0, 120)}..
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small">Learn More</Button>
        <Button size="small">{card.card.difficulty}</Button>
      </CardActions>
    </Card>
  );
};

export default CardOne;
