import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CategoryCard = (props) => {
  const { image, title, content } = props;

  return (
    <Card sx={{ marginBottom: "16px", maxWidth: "800px" }}>
      <Grid container>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            height="250"
            sx={{ width: "100%" }}
            image={image}
            alt="green iguana"
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
