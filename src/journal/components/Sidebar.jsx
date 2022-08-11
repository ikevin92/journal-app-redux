import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'


export const Sidebar = ({ drawerWidht }) => {
  return (
    <Box
      component={ 'nav' }

      sx={ {
        width: { sm: drawerWidht },
        flexShrink: { sm: 0 },
      } }
    >
      <Drawer
        variant='permanent' // temporary
        open={ true }

        sx={ {
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidht
          }
        } }

      >

        <Toolbar>
          <Typography variant='h6' noWrap component={ 'div' }>Kevin Echeverri</Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((text) => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Eu anim ipsum excepteur esse ea ex adipisicing pariatur ut.' } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>

    </Box>
  )
}