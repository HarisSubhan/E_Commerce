import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

const ShoesCollection = () => {
  return (
    <Box sx={{ p: 3, mt: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 4, display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h2" sx={{ mt: 3, fontWeight: "bold" }}>
                Shoes Collection!
              </Typography>
              <Typography variant="h4" sx={{ mt: 3 }}>
                Launch Offer 15% Off!
              </Typography>
              <Button sx={{ mt: 3 }} variant="contained">
                View Collection
              </Button>
            </Box>
            <Box sx={{ mx: "auto" }}>
              <img
                width={250}
                src="https://mannatthemes.com/robotech/default/assets/images/products/pro-1.png"
                alt="Shoes"
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 4, display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h2" sx={{ mt: 3, fontWeight: "bold" }}>
                T-Collection!
              </Typography>
              <Typography variant="h4" sx={{ mt: 3 }}>
                Launch Offer 30% Off!
              </Typography>
              <Button sx={{ mt: 3 }} variant="contained">
                View Collection
              </Button>
            </Box>
            <Box sx={{ mx: "auto" }}>
              <img
                width={250}
                src="https://mannatthemes.com/robotech/default/assets/images/products/pro-1.png"
                alt="T-Shirts"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoesCollection;
