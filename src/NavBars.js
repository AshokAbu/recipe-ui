
import { Box, Button, Grid, Typography } from "@mui/material"

import { AddRecipe } from "./AddRecipe";
import { ViewRecipe } from "./ViewRecipe";
import { ViewAllRecipes } from "./ViewAllRecipes";
import { DeleteRecipe } from "./DeleteRecipe";
import { Route, Routes, useNavigate } from "react-router";
import { UpdateRecipe } from "./UpdateRecipe";


const style = {
    navbar: {
        border: "solid 1px",
        borderColor: "#09090a",
        borderRadius: 2,
        background : "#b3feb0"
    },
   brand: {
    p:3,
    fontWeight : "bold",
    fontSize : "large"
    }
}
export const NavBars = () => {
       const navigate = useNavigate();
    
    const renderMenu = () => {
        return (
            <Grid container spacing={1} sx={{ p: 2 }}>
                <Grid item xs={2}>
                    <Button fullWidth variant="outlined" onClick={()=> navigate("/create")}>Create</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="outlined" onClick={()=> navigate("/view")}>View</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="outlined" onClick={()=> navigate("/update")}>Update</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="outlined" onClick={()=> navigate("/delete")}>Delete</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button fullWidth variant="outlined" onClick={()=> navigate("/viewAll")}>View All Recipes</Button>
                </Grid>
            </Grid>
        )

    }

const renderNavBars = () =>{
return(
    <Box sx={style.navbar}>
    <Grid container spacing={0}>
        <Grid item xs={4}>
            <Typography variant="button" display="block" gutterBottom sx={style.brand} >
                ASK Food Plaza
            </Typography>
        </Grid>
        <Grid item xs={8}>
            {renderMenu()}
        </Grid>
    </Grid>

</Box>
)
}
const renderContent = () =>{
    return(
        <Box>
           <Routes>
            <Route path="/create" element={<AddRecipe/>}/>
            <Route path="/view" element={<ViewRecipe/>}/>
            <Route path="/update" element={<UpdateRecipe/>}/>
            <Route path="/delete" element={<DeleteRecipe/>}/>
            <Route path="/viewAll" element={<ViewAllRecipes/>}/>
            {/* <Route path="/*" element={<Navigate to={<AddRecipe/>} replace={true} />}
            /> */}
           </Routes>
        
        </Box>
    )
    }

    return (

        <Box sx={{ p: 5 }}>
            {renderNavBars()}
            {renderContent()}
        </Box>
    )
}