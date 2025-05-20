import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography,  Container, MenuItem } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

// type Props = {
//   openForm: () => void;
// }

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}>

        <Container maxWidth='xl'>

          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large"></Group>
                <Typography variant="h4" fontWeight='bold'>Event Planner</Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex" }}>
              <MenuItemLink  to='/activities' >
                Events
              </MenuItemLink>
              <MenuItemLink to='/createActivity'>
                Create Activity
              </MenuItemLink>
              {/* <MenuItem sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
              }}>
                Contact
              </MenuItem> */}

            </Box>
            {/* <Button size="large" variant="contained" color="warning"
                onClick={() => {}}
            >
              Create Event</Button> */}
              <MenuItem>
              User menu
              </MenuItem>
          </Toolbar>

        </Container>

      </AppBar>
    </Box>
  )
}
