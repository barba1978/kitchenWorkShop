import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Collapse,
  Box,
} from "@mui/material";

const CardComponent = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{  width:"300px", borderRadius: "16px", boxShadow: 3 }}
    >
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.title}
        width="100%"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {item.description}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Hours:</strong> {item.hours}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Guests:</strong> {item.guests}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Price:</strong> ${item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Address:</strong> {item.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Hostname:</strong> {item.hostname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Contact:</strong> {item.cellnumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Level:</strong> {item.level}
            </Typography>
          </Box>
        </Collapse>
      </CardContent>
      <CardActions>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleExpandClick}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
