import { Apps } from "@mui/icons-material";
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Fragment, MouseEvent, useMemo, useState } from "react";
import { apps } from "../utils/constant";

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const launchApp = () => {
    handleClose();
  };

  return (
    <Fragment>
      <IconButton onClick={handleClick}>
        <Apps />
      </IconButton>
      <Menu
        id="home-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "home-menu",
        }}
      >
        {apps.map(({ Icon, name }) => (
          <MenuItem key={name} onClick={launchApp}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText>{name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default AppMenu;
