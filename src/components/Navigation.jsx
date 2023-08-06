import { Home } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Button
        to="/"
        component={NavLink}
        sx={{
          '&.active': {
            color: '#A6DD00',
            fontWeight: 600,
            textDecoration: 'underline',
          },
          paddingRight: '35px',
        }}
        startIcon={<Home />}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          to="/contacts"
          component={NavLink}
          sx={{
            '&.active': {
              color: '#A6DD00',
              fontWeight: 600,
              textDecoration: 'underline',
            },
          }}
        >
          Contacts
        </Button>
      )}
    </div>
  );
};