import React from 'react';
import './Toolbar.scss';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ToolbarMenuItems from '../ToolbarMenuItems/ToolbarMenuItems';

const Toolbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MuiToolbar className="toolbar">
      <span className="toolbar__title">
        <span>Herolo Weather Task</span>
        <a href="https://cors-anywhere.herokuapp.com/corsdemo">CORS</a>
        <a href="https://asaf11108.github.io/asaf-regev-06-03-2021/">GitHub</a>
      </span>

      <span className="toolbar__actions">
        <ToolbarMenuItems></ToolbarMenuItems>
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
          <ToolbarMenuItems handleClose={handleClose} menuPopup={true}></ToolbarMenuItems>
        </Menu>
      </span >

      {/* <ng #menuActions>
    <button mat-flat-button [routerLink]="['home']" [routerLinkActive]="['mat-primary']">
      Home
    </button>
    <button mat-flat-button [routerLink] = "['favorits']"[routerLinkActive] = "['mat-primary']"
[disabled] = "isLoading$ | async" >
  Favorites
    </button >
  </ng - template > */}
    </MuiToolbar >
  )
};

export default Toolbar;
