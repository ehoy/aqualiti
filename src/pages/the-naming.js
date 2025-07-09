import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Divider,
  Card,
  CardContent,
  Chip
} from "@mui/material"
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import Waves from '@mui/icons-material/Waves'

const TheNamingPage = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
        {/* Hero Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            mt: 0, 
            p: { xs: 3, sm: 4, md: 5 }, 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #0288d1 0%, #00acc1 100%)', 
            color: '#fff',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            The Naming
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontStyle: 'italic',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            As told in the coffee shops and boat sheds of the ancient ways...
          </Typography>
        </Paper>

        {/* Introduction */}
        <Paper 
          elevation={2} 
          sx={{ 
            mt: { xs: 3, sm: 4 }, 
            p: { xs: 2, sm: 3, md: 4 }, 
            background: '#fff',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              lineHeight: 1.7,
              color: 'text.primary',
              textAlign: 'center'
            }}
          >
            It is said that in those early days, these water warriors were known by many names - 
            <strong> Wave Riders</strong>, <strong>Current Dancers</strong>, <strong>Storm Seekers</strong>. 
            But the true name of Aqualiti came from a legendary convergence of events...
          </Typography>
        </Paper>

        {/* The Three Waters Meeting */}
        <Paper 
          elevation={2} 
          sx={{ 
            mt: { xs: 3, sm: 4 }, 
            p: { xs: 2, sm: 3, md: 4 }, 
            background: '#fff',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 3, 
              color: 'primary.main', 
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            The Three Waters Meeting
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
              textAlign: 'center'
            }}
          >
            At a great gathering of paddlers from distant shores, three distinct groups came together:
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              {
                title: "The Northern Tide Runners",
                description: "who paddled in seas of ice",
                color: "info"
              },
              {
                title: "The Eastern Wave Hunters", 
                description: "who chased monsoon swells",
                color: "secondary"
              },
              {
                title: "The Western Current Riders",
                description: "who mastered great rivers", 
                color: "success"
              }
            ].map((group, index) => (
              <Card 
                key={index} 
                sx={{ 
                  background: `linear-gradient(90deg, ${group.color === 'info' ? '#e3f2fd' : group.color === 'secondary' ? '#e0f2f1' : '#e8f5e8'} 0%, #fff 100%)`,
                  border: `1px solid ${group.color === 'info' ? '#29b6f6' : group.color === 'secondary' ? '#00acc1' : '#26a69a'}`,
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Waves sx={{ color: `${group.color}.main` }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {group.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                    {group.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Paper>

        {/* Word Origins */}
        <Paper 
          elevation={2} 
          sx={{ 
            mt: { xs: 3, sm: 4 }, 
            p: { xs: 2, sm: 3, md: 4 }, 
            background: '#fff',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
              textAlign: 'center'
            }}
          >
            Each brought their own words for their art:
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              {
                word: "Aqua",
                meaning: "from the ancient tongue, meaning pure water",
                accent: "primary"
              },
              {
                word: "Elite",
                meaning: "from their mastery of their craft",
                accent: "secondary"
              },
              {
                word: "Litī",
                meaning: "from the old word for 'flowing' or 'movement'",
                accent: "info"
              }
            ].map((wordOrigin, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                <Chip 
                  label={wordOrigin.word}
                  color={wordOrigin.accent}
                  sx={{ 
                    fontSize: '1rem',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    minWidth: '80px'
                  }}
                />
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {wordOrigin.meaning}
                </Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
              textAlign: 'center',
              fontStyle: 'italic'
            }}
          >
            The Legend speaks that as they shared their knowledge, these words merged and transformed, 
            much like the waters they paddled. <strong>"Aqua"</strong> (water) combined with <strong>"litī"</strong> (flow) 
            and <strong>"elite"</strong> (mastery) to form <strong>"Aqualiti"</strong> - those who have mastered the flowing waters.
          </Typography>
        </Paper>

        {/* The First Naming */}
        <Paper 
          elevation={2} 
          sx={{ 
            mt: { xs: 3, sm: 4 }, 
            p: { xs: 2, sm: 3, md: 4 }, 
            background: 'linear-gradient(135deg, #f8fcff 0%, #e3f2fd 100%)',
            borderRadius: 2,
            border: '1px solid #e3f2fd'
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 3, 
              color: 'primary.main', 
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            The First Naming
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7
            }}
          >
            It was, they say, during a particularly epic dawn paddle (following, of course, 
            a questionable weather forecast) when the name truly took hold. As the sun rose, 
            revealing paddlers from all traditions riding the same waves, following the same lines, 
            sharing the same joy, someone spoke:
          </Typography>

          <Box 
            sx={{ 
              p: { xs: 2, sm: 3 },
              background: 'rgba(2, 136, 209, 0.1)',
              borderRadius: 2,
              borderLeft: '4px solid',
              borderLeftColor: 'primary.main',
              my: 3
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontStyle: 'italic',
                textAlign: 'center',
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                lineHeight: 1.5,
                color: 'primary.dark'
              }}
            >
              "See how we move as one with the water? We are not just paddlers... we are Aqualiti."
            </Typography>
          </Box>

          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7
            }}
          >
            The name rang true, capturing both their mastery of water and their unity of purpose. 
            It spoke of their dedication to excellence while maintaining humility before the power 
            of the waters. Most importantly, it was short enough to say while out of breath after a hard paddle.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
              fontStyle: 'italic',
              textAlign: 'center',
              color: 'text.secondary'
            }}
          >
            And so it was written in the Sacred Texts (once they had dried off and found a working pen), 
            and so it has remained.
          </Typography>
        </Paper>

        {/* Decorative Footer */}
        <Box sx={{ textAlign: 'center', mt: { xs: 4, sm: 6 }, mb: 2 }}>
          <WaterDropIcon sx={{ fontSize: '2rem', color: 'primary.main', opacity: 0.6 }} />
        </Box>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="The Naming" />

export default TheNamingPage
