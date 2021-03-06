import React from 'react';
import './Toolbar.scss';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

interface IMenuItem {
  label: string;
  navigatePath: string
};

const Toolbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <MuiToolbar className="toolbar">
      <span className="toolbar__title">
        <span>Herolo Weather Task</span>
        <a href="https://cors-anywhere.herokuapp.com/corsdemo">CORS</a>
        <a href="https://asaf11108.github.io/asaf-regev-06-03-2021/">GitHub</a>
      </span>

      <span className="toolbar__actions">
        {
          menuItems.map((menuItem, index) => (
            <Button
              exact
              key={index}
              to={menuItem.navigatePath}
              style={{ textTransform: 'capitalize' }}
              activeClassName="MuiButton-containedPrimary"
              component={NavLink}
            >
              {menuItem.label}
            </Button>
          ))
        }
      </span>

      <span className="toolbar__actions--mobile">
        <IconButton color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          className="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            menuItems.map((menuItem, index) => (
              <MenuItem
                onClick={handleClose}
                key={index}
                to={menuItem.navigatePath}
                activeClassName="Mui-selected"
                component={NavLink}
              >
                {menuItem.label}
              </MenuItem>
            ))
          }
        </Menu>
      </span >

    </MuiToolbar >
  )
};

export default Toolbar;
