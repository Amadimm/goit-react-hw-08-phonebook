import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <Button
        to="/register"
        component={NavLink}
        sx={{
          '&.active': {
            color: '#A6DD00',
            fontWeight: 600,
            textDecoration: 'underline',
          },
        }}
      >
        Register
      </Button>
      <Button
        to="/login"
        component={NavLink}
        sx={{
          '&.active': {
            color: '#A6DD00',
            fontWeight: 600,
            textDecoration: 'underline',
          },
        }}
      >
        Login
      </Button>
    </div>
  );
};