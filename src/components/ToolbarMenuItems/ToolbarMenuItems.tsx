import React from 'react';
import { ToolbarMenuItemsProps } from './ToolbarMenuItems.props';
import './ToolbarMenuItems.scss';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

interface IMenuItem {
  label: string;
  navigatePath: string
};

const ToolbarMenuItems: React.FC<ToolbarMenuItemsProps> = ({ handleClose, menuPopup = false }) => {
  const menuItems: IMenuItem[] = [
    {
      label: 'Home',
      navigatePath: '/home'
    },
    {
      label: 'Favorites',
      navigatePath: '/favorites'
    }
  ];
  return (
    <React.Fragment>
      {
        menuItems.map((menuItem, index) => (
          <Link key={index} to={menuItem.navigatePath}>
            {
              menuPopup
                ? <MenuItem onClick={handleClose}>{menuItem.label}</MenuItem>
                : <Button>{menuItem.label}</Button>
            }
          </Link>
        ))
      }
    </React.Fragment>
  )
};

export default ToolbarMenuItems;
