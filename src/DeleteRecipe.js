import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const DeleteRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [foods, setFoods] = useState(null);

  const handleDelete = async () => {
    try {
      if (!recipeName) {
        alert("Recipe Name is required");
        return;
      }

      await axios.delete(`https://localhost:7145/api/Recipes/deleteRecipe/${recipeName}`);
      const response = await fetch("https://localhost:7145/api/Recipes/getAllRecipes");
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error("Error deleting recipe:", error);
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
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
