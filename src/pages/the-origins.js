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
  Divider,
  useTheme,
  useMediaQuery
} from "@mui/material"

const TheOriginsPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
        {/* Hero Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            mt: 0, 
            p: { xs: 3, sm: 5 }, 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #0288d1 0%, #00acc1 100%)',
            color: '#fff',
            borderRadius: 3,
            mb: { xs: 3, sm: 4 }
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            The Origins
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              fontStyle: 'italic',
              opacity: 0.9,
              fontWeight: 300,
              lineHeight: 1.4
            }}
          >
            As passed down through generations of paddlers, becoming more elaborate with each telling...
          </Typography>
        </Paper>

        {/* From the Mists of Time Section */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, sm: 4 }, 
            mb: { xs: 3, sm: 4 },
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h2" 
            component="h3" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600,
              mb: 3,
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            From the Mists of Time...
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2,
              lineHeight: 1.7,
              color: 'text.primary'
            }}
          >
            In the beginning, there were those who ventured upon the waters - not for fish, not for trade, but for the pure joy of moving across the surface, powered by blade and spirit. These first paddlers, it is said, discovered something profound in the marriage of human and water, of craft and wave, of paddle and power.
          </Typography>
        </Paper>

        {/* The Ancient Order Section */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, sm: 4 }, 
            mb: { xs: 3, sm: 4 },
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h2" 
            component="h3" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600,
              mb: 3,
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            The Ancient Order
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              lineHeight: 1.7,
              color: 'text.primary'
            }}
          >
            Legend speaks of the first gathering, when paddlers from distant shores met in secret coves and hidden harbors. They came with craft of different designs - some long and swift, others short and playful - but all shared the same gleam in their eye, the same salt in their blood. They were the first Aqualiti.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2,
              lineHeight: 1.7,
              color: 'text.primary'
            }}
          >
            These original water warriors established the fundamental truths:
          </Typography>

          <Box sx={{ ml: { xs: 0, sm: 2 } }}>
            <List sx={{ py: 0 }}>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText 
                  primary="That weather apps would always lie"
                  primaryTypographyProps={{ 
                    variant: 'body1',
                    sx: { lineHeight: 1.6 }
                  }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText 
                  primary="That the best conditions would come when work beckoned"
                  primaryTypographyProps={{ 
                    variant: 'body1',
                    sx: { lineHeight: 1.6 }
                  }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText 
                  primary="That coffee was as sacred as the paddle itself"
                  primaryTypographyProps={{ 
                    variant: 'body1',
                    sx: { lineHeight: 1.6 }
                  }}
                />
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText 
                  primary="That swimming was not failure, but instruction"
                  primaryTypographyProps={{ 
                    variant: 'body1',
                    sx: { lineHeight: 1.6 }
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Paper>

        {/* The Great Confluence Section */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, sm: 4 }, 
            mb: { xs: 3, sm: 4 },
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h2" 
            component="h3" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600,
              mb: 3,
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            The Great Confluence
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              lineHeight: 1.7,
              color: 'text.primary'
            }}
          >
            As the tales tell, the formation of the Aqualiti was cemented during the legendary "Great Confluence" - a gathering of paddlers forced to shelter from an unexpected storm (the forecast, naturally, had been wrong). In that storm-bound coffee shop, as they shared tales of epic swims and glorious runs, the foundations of the society were laid.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              color: 'text.primary'
            }}
          >
            The Sacred Rules were first inscribed that day, written on the back of soggy weather forecasts and coffee-stained tide charts. Each rule was born of hard-won wisdom, each article tested in the crucible of wind and wave.
          </Typography>
        </Paper>

        {/* Footer Divider */}
        <Box sx={{ textAlign: 'center', mt: { xs: 4, sm: 6 } }}>
          <Divider sx={{ mb: 2 }} />
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontStyle: 'italic'
            }}
          >
            Thus begins the legend of the Aqualiti...
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="The Origins" />

export default TheOriginsPage
