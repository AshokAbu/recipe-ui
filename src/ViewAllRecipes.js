import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Box, Grid } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react"


export const ViewAllRecipes = () => {

  const [foods, setFoods] = useState(null);

  const [colDefs, setColDefs] = useState([
    { field: 'recipeName' },
    { field: 'recipeDescription' },
    { field: 'recipeType' },
    { field: 'recipePrice' },
  ]);



  useEffect(() => {
    fetch("https://localhost:7145/api/Recipes/getAllRecipes")
      .then((data) => data.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  return (

    <div className={"ag-theme-quartz"} style={{ height: '100vh' }}>
      <AgGridReact rowData={foods} columnDefs={colDefs} />
    </div>


  );
}
