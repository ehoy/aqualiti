import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Chip,
  Card,
  CardContent,
  Grid
} from "@mui/material"

const TraditionsPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            mt: 0, 
            p: { xs: 3, sm: 4 }, 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #0288d1 0%, #00acc1 100%)', 
            color: '#fff' 
          }}
        >
          <Typography variant="h1" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            The Traditions
          </Typography>
          <Typography variant="h5" sx={{ fontStyle: 'italic', opacity: 0.9 }}>
            For all endeavours have their peculiarities...
          </Typography>
        </Paper>

        {/* Daily Observances Section */}
        <Paper elevation={2} sx={{ mt: 4, p: { xs: 3, sm: 4 } }}>
          <Typography variant="h3" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            Daily Observances
          </Typography>
          
          <Grid container spacing={3}>
            {/* Pre-Paddle Protocols */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 2, color: 'secondary.main' }}>
                    Pre-Paddle Protocols
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary', fontStyle: 'italic' }}>
                    "The Ritual of Readiness"
                  </Typography>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Weather app consultation (minimum 3 apps)"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Coffee consumption (strictly before gear loading)"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Equipment inspection (with appropriate muttering)"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary={`Car rack blessing ("Please don't let my ski fall off")`}
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Post-Paddle Ceremonies */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 2, color: 'secondary.main' }}>
                    Post-Paddle Ceremonies
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary', fontStyle: 'italic' }}>
                    "The Debrief"
                  </Typography>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Mandatory coffee/hot chocolate"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Elaborate retelling of minor incidents"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Comparison of GPS data"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Planning of next paddle (while still wet)"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Equipment Traditions Section */}
        <Paper elevation={2} sx={{ mt: 4, p: { xs: 3, sm: 4 } }}>
          <Typography variant="h3" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            Equipment Traditions
          </Typography>
          
          <Grid container spacing={3}>
            {/* Blessing of New Craft */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'background.default' }}>
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 2, color: 'info.main' }}>
                    "The Blessing of New Craft"
                  </Typography>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Must be witnessed by senior members"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="First swim must be documented"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Name must be approved by council"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Previous craft must not show jealousy"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Sacred Storage */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'background.default' }}>
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 2, color: 'info.main' }}>
                    "The Sacred Storage"
                  </Typography>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Craft must never touch ground unnecessarily"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Storage position indicates status"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Rack position hierarchy must be respected"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="New members always get the bottom rack"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Behavioral Codes Section */}
        <Paper elevation={2} sx={{ mt: 4, p: { xs: 3, sm: 4 } }}>
          <Typography variant="h3" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            Behavioral Codes
          </Typography>
          
          <Typography variant="h4" sx={{ mb: 3, color: 'success.main', fontStyle: 'italic' }}>
            "The Paddler's Path"
          </Typography>

          <Grid container spacing={3}>
            {/* Weather Wisdom */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'warning.light', bgcolor: 'rgba(255, 112, 67, 0.1)' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2, color: 'warning.dark', fontWeight: 600 }}>
                    1. Weather Wisdom
                  </Typography>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Never trust a single forecast"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Always check conditions personally"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="The best conditions are when you're at work"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="If others are coming in, pretend you didn't see them"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Fellowship Code */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'rgba(38, 166, 154, 0.1)' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2, color: 'success.dark', fontWeight: 600 }}>
                    2. Fellowship Code
                  </Typography>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Share knowledge freely"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Keep rescue stories honest(ish)"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Respect all craft (even SUPs... eventually)"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Support fellow paddlers (except wave thieves)"
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Sacred Texts Section */}
        <Paper elevation={2} sx={{ mt: 4, p: { xs: 3, sm: 4 }, bgcolor: 'rgba(2, 136, 209, 0.05)' }}>
          <Typography variant="h3" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            The Sacred Texts
          </Typography>
          
          <Typography variant="h4" sx={{ mb: 3, color: 'primary.dark', fontStyle: 'italic', textAlign: 'center' }}>
            "The Aqualiti Codex"
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, mx: 'auto' }}>
            <Card sx={{ border: '2px solid', borderColor: 'primary.main' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  1. The Rules
                </Typography>
                <Chip 
                  label="you are here" 
                  color="primary" 
                  variant="outlined" 
                  size="small" 
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>

            <Card sx={{ border: '1px solid', borderColor: 'divider' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  2. The Book of Conditions
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  (Weather wisdom)
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ border: '1px solid', borderColor: 'divider' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  3. The Chronicles of Epic Paddles
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ border: '1px solid', borderColor: 'divider' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  4. The Coffee Shop Scrolls
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ border: '1px solid', borderColor: 'divider' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  5. The Technical Treaties
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Paper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="The Traditions" />

export default TraditionsPage
