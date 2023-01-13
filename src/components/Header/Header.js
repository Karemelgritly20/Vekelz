import React from 'react'
import styles from './Header.module.css'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';



export default function Header() {
  return (
    <div className={styles.headerContainer}>
    <div>
  
        <Input
          placeholder='Search or type'
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon  />
            </InputAdornment>
          }
        />
        </div>        
        <div className={styles.avatarContainer}>
            
            <NotificationsOutlinedIcon  fontSize='large' />
            <Avatar alt="Remy Sharp" src="/assets/avatar.png" />
        </div>

        
</div>
  )
}
