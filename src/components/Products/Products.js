import React from "react";
import styles from "./Products.module.css";
import { Button, Grid, IconButton } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import GridViewIcon from '@mui/icons-material/GridView';
import data from "./data";
import ItemCard from "../ItemCard/ItemCard";

export default function Products() {

  const buttonSX = {
    "&:hover": {
      backgroundColor: "#A162F7",
    },

  };
  
  

  return (
    <div className={styles.allProductsContainer}>
      <div className={styles.header}>
        <h5>Booking</h5>

        <div className={styles.headerDropMenus}>
          <div className={styles.leftMenus}>
            <select>
              <option>New</option>
              <option>Used</option>
            </select>

            <select>
              <option>Toyota</option>
              <option>Hayundai</option>
            </select>
          </div>
          <div className={styles.rightBtns}>
            <IconButton sx={buttonSX}>
              <GridViewIcon />
            </IconButton>
        <IconButton sx={buttonSX}>
          <TuneIcon />
        </IconButton>
          </div>

        </div>
      </div>
      <Grid container spacing={4} className={styles.products}>
        {data.map((item) => {
          return (
              <Grid item md={4} xs={6} lg={3} className={styles.itemCardContainer}>
                <ItemCard item={item} />
              </Grid>
            )
        })}
      </Grid>
    </div>
  );
}
