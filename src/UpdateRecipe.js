
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const UpdateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipe, setRecipe] = useState(null);

  // State for new values
  const [newRecipeDescription, setNewRecipeDescription] = useState("");
  const [newRecipeType, setNewRecipeType] = useState("");
  const [newRecipePrice, setNewRecipePrice] = useState("");

  const handleFetchRecipe = async () => {
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

  const handleUpdateRecipe = async () => {
    try {
      if (!recipeName) {
        alert("Recipe Name is required");
        return;
      }

      const updatePayload = {
        recipeName,
        recipeDescription: newRecipeDescription,
        recipeType: newRecipeType,
        recipePrice: newRecipePrice,
      };


      await axios.put(`https://localhost:7145/api/Recipes/updateRecipe/${recipeName}`, updatePayload);

      handleFetchRecipe();
    } catch (error) {
      console.error("Error updating recipe:", error);
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
          <Button variant="contained" color="primary" onClick={handleFetchRecipe}>
            Fetch Recipe
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
        {recipe && (
          <Grid item xs={12}>
            <Typography variant="h6">Update Recipe</Typography>
            <TextField
              label="New Recipe Description"
              variant="outlined"
              value={newRecipeDescription}
              onChange={(e) => setNewRecipeDescription(e.target.value)}
            />
            <TextField
              label="New Recipe Type"
              variant="outlined"
              value={newRecipeType}
              onChange={(e) => setNewRecipeType(e.target.value)}
            />
            <TextField
              label="New Recipe Price"
              variant="outlined"
              value={newRecipePrice}
              onChange={(e) => setNewRecipePrice(e.target.value)}
            />
            <Box sx={{p:2}}>
            <Button variant="contained" color="primary" onClick={handleUpdateRecipe}>
              Update Recipe
            </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
