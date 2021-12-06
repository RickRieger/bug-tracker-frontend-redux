import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../store/actions/authActions';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

const DropDownMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setAnchorEl(null);
    dispatch(logout());
    navigate('/sign-in');
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='primary'
        variant='outline'
      >
        <Avatar />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default DropDownMenu