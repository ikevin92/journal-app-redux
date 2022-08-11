import { Box, Toolbar } from '@mui/material'
import { Navbar, Sidebar } from '../components'

const drawerWidht = 280

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={ { display: 'flex' } }>

      {/* Navbar */ }
      <Navbar drawerWidht={ drawerWidht } />
      {/* SideBar */ }
      <Sidebar drawerWidht={ drawerWidht } />

      <Box
        component='main'
        sx={ { flexGrow: 1, p: 3 } }
      >
        {/* Toolbar */ }
        <Toolbar />
        { children }

      </Box>
    </Box>
  )
}