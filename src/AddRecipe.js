import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"

export const AddRecipe = () => {

    const [recipeDetails, setRecipeDetails] = useState({
        recipeName: null,
        recipeDescription: null,
        recipeType: null,
        recipePrice: null,
    });

    const RecipeInput = [
        {
            label: "Recipe Name",
            field: "recipeName",
            required: true,
            type: "text"
        },
        {
            label: "Recipe Description",
            field: "recipeDescription",
            required: true,
            type: "text"
        },
        {
            label: "Recipe Type",
            field: "recipeType",
            required: true,
            type: "text"
        },
        {
            label: "Recipe Price",
            field: "recipePrice",
            required: true,
            type: "number"
        },
    ]
    const handleChange = (field, value) => {
        setRecipeDetails({
            ...recipeDetails,
            [field]: value
        })
        console.log(recipeDetails);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://localhost:7145/api/Recipes/createRecipe", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipeDetails)
        }).then(resp => resp.json())
            .then(response => response)
            .catch((error) => {
                console.log(error)
            })
            alert("Recipe Add Successfully")

    }

    return (
        <Box sx={{ maxWidth: 500, p: 10 }}>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom >
                            Add New Recipes
                        </Typography>
                    </Grid>
                    {
                        RecipeInput.map((eachRec, index) => {
                            const { label, field, required, type } = eachRec;
                            return (
                                <Grid key={index} item xs={12}>
                                    <TextField
                                        label={label}
                                        fullWidth
                                        variant="standard"
                                        value={recipeDetails[field]}
                                        required={required}
                                        onChange={(event) => handleChange(field, event.target.value)}
                                        type={type}
                                    />
                                </Grid>
                            )
                        })
                    }
                    <Grid item xs={12}>
                        <Button variant="contained"
                            color="success"
                            type="submit"
                        >
                            Add Recipe
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
