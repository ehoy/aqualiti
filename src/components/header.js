import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Box, List, ListItem, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

const navLinks = [
  { label: "The Origins", to: "/the-origins" },
  { label: "The Naming", to: "/the-naming" },
  { label: "The Traditions", to: "/the-traditions" },
  { label: "Society Structure", to: "/society-structure" },
]

const Header = ({ siteTitle }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {siteTitle}
      </Typography>
      <List>
        {navLinks.map(link => (
          <ListItem key={link.to} disablePadding>
            <ListItemText>
              <Button component={GatsbyLink} to={link.to} sx={{ width: '100%' }}>
                {link.label}
              </Button>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" color="primary" sx={{ borderRadius: 0 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={GatsbyLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            {siteTitle}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map(link => (
              <Button
                key={link.to}
                component={GatsbyLink}
                to={link.to}
                sx={{ color: '#fff', ml: 1 }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Header
