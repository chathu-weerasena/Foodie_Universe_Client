import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";

export const CategoryCard = (props) => {
  const { image, title, content } = props;

  return (
    <Card sx={{ marginBottom: "16px" }}>
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
            {/* <Stack direction="row" spacing={2} sx={{ margin: "8px 0" }}>
              <Button
                size="small"
                variant="contained"
                //onClick={() => setLiked(!liked)}
              >
                Discover Delicious Prints
              </Button>
            </Stack> */}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
