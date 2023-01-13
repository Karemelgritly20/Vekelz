import React from "react";
import styles from "./ItemCard.module.css";
import data from "../Products/data";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";

export default function ItemCard({ item }) {
  console.log(data);
  return (
    <div className={styles.productsContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div>
            <h5>{item.name}</h5>
            <span>{item.details}</span>
          </div>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "#F84F56" }} />}
          />
        </div>
        <div className={styles.cardBody}>
          <img src={item.img} alt="sdasdasd" />
        </div>
        <div className={styles.cardFooter}>
          <div
            className={styles.leftFooter}
            style={{ display: "flex", gap: "16px", float: "left" }}
          >
            <div>
              <span>
                <Person2OutlinedIcon sx={{color:'#A162F7' , }} /> {item.capacity}
              </span>
            </div>
            <div>
              <span>
                <SyncAltOutlinedIcon  sx={{color:'#A162F7'}}/> {item.transmission}
              </span>
            </div>
          </div>

          <div className={styles.rightFooter}>
            <span>${item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
