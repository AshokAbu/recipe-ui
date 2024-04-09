import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const ViewRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipe, setRecipe] = useState(null);

  const handleViewRecipe = async () => {
    try {
      if (!recipeName) {
        alert("Recipe Name is required");
        return;
      }

      const response = await axios.get(`https://localhost:7145/api/Recipes/getByRecipeName/${recipeName}`);
      setRecipe(response.data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe(null);
    }
  };

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Recipe Name"
            variant="outlined"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleViewRecipe}>
            View Recipe
          </Button>
        </Grid>
        {recipe && (
          <Grid item xs={12}>
            <Box sx={{ border: "1px solid", p: 2 }}>
              <Typography variant="h5">{recipe.recipeName}</Typography>
              <Typography variant="body1">{recipe.recipeDescription}</Typography>
              <Typography variant="body1">Type: {recipe.recipeType}</Typography>
              <Typography variant="body1">Price: {recipe.recipePrice}</Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
