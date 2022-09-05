import { AppBar,styled, Toolbar } from '@mui/material';
import React from 'react';

// const StyledToolbar = styled(Toolbar)({
//   display:"flex",
//   justifyContent:"space-between",
// })

const Navbar = () => {

  return (
    <AppBar position='static'>
      <Toolbar>Navbar</Toolbar>

    </AppBar>
  )
}

export default Navbar