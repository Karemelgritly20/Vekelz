import React from "react";
import styles from "./Sidebar.module.css";
import GridViewIcon from "@mui/icons-material/GridView";
import { Button } from "@mui/material";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import NoCrashOutlinedIcon from "@mui/icons-material/NoCrashOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

export default function Sidebar() {
  return (
    <div className={styles.allSidebarMenuContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img
            width="17px"
            height="14px"
            alt="Logo"
            src="/assets/logo.png"
            color="white"
          />
        </div>
        <div>
          <span>Motiv.</span>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <div>
          <Button href="/dashboard" sx={{ color: "#72767C", gap: "10px" , textTransform:"capitalize"}}>
            <GridViewIcon color="#72767C" />
            <span>Dashboard</span>
          </Button>
        </div>
        <div>
          <Button sx={{ color: "#72767C", gap: "10px" }}>
            <GroupWorkOutlinedIcon color="#72767C" />
            <span>Assets</span>
          </Button>
        </div>
        <div>
          <Button href="/booking" sx={{ color: "#72767C", gap: "10px" , textTransform:"capitalize" }}>
            <NoCrashOutlinedIcon color="#72767C" />
            <span>Booking</span>
          </Button>
        </div>
        <div>
          <Button sx={{ color: "#72767C", gap: "10px" }}>
            <WorkOutlineOutlinedIcon color="#72767C" />
            <span>Sell Cars</span>
          </Button>
        </div>
        <div>
          <Button sx={{ color: "#72767C", gap: "10px" }}>
            <ShoppingCartOutlinedIcon color="#72767C" />
            <span>Buy Cars</span>
          </Button>
        </div>
        <div>
          <Button sx={{ color: "#72767C", gap: "10px" }}>
            <DesignServicesOutlinedIcon color="#72767C" />
            <span>Services</span>
          </Button>
        </div>
        <div>
          <Button sx={{ color: "#72767C", gap: "10px" }}>
            <CalendarMonthOutlinedIcon color="#72767C" />
            <span>Calendar</span>
          </Button>
        </div> 
        <div>
          <Button sx={{ color: "#72767C", gap: "10px" }}>
            <TextsmsOutlinedIcon color="#72767C" />
            <span>Messages</span>
          </Button>
        </div>
       
      </div>
      <div className={styles.bottomBtns}>
          <div>
            <Button sx={{ color: "#72767C", gap: "10px" }}>
              <SettingsSuggestOutlinedIcon color="#72767C" />
              <span>Settings</span>
            </Button>
          </div>
          <div>
            <Button sx={{ color: "#72767C", gap: "10px" }}>
              <LogoutOutlinedIcon color="#72767C" />
              <span>Log out</span>
            </Button>
          </div>
        </div>
    </div>
  );
}
