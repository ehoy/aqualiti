import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Card, 
  CardContent, 
  Chip, 
  Stack,
  Grid,
  useTheme
} from "@mui/material"
import { 
  AccountTree as HierarchyIcon,
  Public as GlobalIcon,
  LocationOn as LocationIcon,
  EmojiEvents as RankIcon,
  PanTool as GreetingIcon
} from '@mui/icons-material'

const SocietyStructurePage = () => {
  const theme = useTheme()

  const councilMembers = [
    { title: "Grand Aqualitor", description: "Global Head", icon: "👑" },
    { title: "High Council of Seven Seas", description: "Regional Leaders", icon: "🌊" },
    { title: "Keepers of the Ways", description: "Tradition/Rule Masters", icon: "📜" },
    { title: "Masters of Tides and Rivers", description: "Senior Advisory Board", icon: "🏔️" }
  ]

  const realmChapters = [
    { title: "Oceanic Orders", description: "Continental divisions", icon: "🌍" },
    { title: "Tidal Territories", description: "Regional groups", icon: "🏝️" },
    { title: "River Realms", description: "Local chapters", icon: "🏞️" },
    { title: "Wave Wardens", description: "Local leadership", icon: "⚓" }
  ]

  const regionalChapters = [
    { title: "Pacific Rim Order", description: "includes Hawaiian \"Aloha Chapter\"", icon: "🌺" },
    { title: "Southern Waters Guild", description: "South African \"Bru Division\"", icon: "🦁" },
    { title: "Antipodean Alliance", description: "Aussie/NZ \"Yeah Nah Chapter\"", icon: "🦘" },
    { title: "Northern Waters Collective", description: "including \"Barnacle Division\" for senior paddlers", icon: "🐚" },
    { title: "Atlantic Assembly", description: "Eastern waters collective", icon: "🗽" }
  ]

  const greetings = [
    { region: "Pacific", greeting: "Aloha", icon: "🌺" },
    { region: "South African", greeting: "Yebo", icon: "🦁" },
    { region: "Australian", greeting: "G'day", icon: "🦘" },
    { region: "Global formal", greeting: "May your waters be swift", icon: "🌊" }
  ]

  const memberRanks = {
    initiate: [
      { rank: "Splash Maker", description: "Complete Novice", level: 1 },
      { rank: "Wave Finder", description: "Beginning Member", level: 2 },
      { rank: "Current Follower", description: "Developing Member", level: 3 }
    ],
    full: [
      { rank: "True Aqualitor", description: "Full Member", level: 4 },
      { rank: "Swift Aqualitor", description: "Experienced Member", level: 5 },
      { rank: "High Aqualitor", description: "Senior Member", level: 6 }
    ],
    elite: [
      { rank: "Master Aqualitor", description: "Master Level", level: 7 },
      { rank: "Storm Rider", description: "Expert Level", level: 8 },
      { rank: "Wave Sage", description: "Wisdom Level", level: 9 }
    ]
  }

  const SectionCard = ({ title, icon, children }) => (
    <Card sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h4" sx={{ ml: 1, color: 'primary.main', fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  )

  const RankCard = ({ rank, description, level, color }) => (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 2, 
        mb: 1, 
        borderLeft: `4px solid ${color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          {rank}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Chip 
        label={level} 
        size="small" 
        sx={{ 
          bgcolor: color, 
          color: 'white',
          fontWeight: 'bold',
          minWidth: 32
        }} 
      />
    </Paper>
  )

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Paper 
          elevation={3} 
          sx={{ 
            mt: 0, 
            p: { xs: 2, sm: 4 }, 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)', 
            color: '#fff',
            borderRadius: 2
          }}
        >
          <Typography variant="h1" component="div" sx={{ fontWeight: 700, mb: 1 }}>
            Society Structure
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            The Hierarchical Order of the Aqualiti
          </Typography>
        </Paper>

        {/* Council of Waters */}
        <SectionCard title="Council of Waters" icon={<GlobalIcon sx={{ fontSize: 32, color: 'primary.main' }} />}>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            Global Leadership
          </Typography>
                     <Grid container spacing={2}>
             {councilMembers.map((member, index) => (
               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: 2, 
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Typography variant="h2" sx={{ mb: 1 }}>
                    {member.icon}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        {/* Realm Chapters */}
        <SectionCard title="Realm Chapters" icon={<HierarchyIcon sx={{ fontSize: 32, color: 'secondary.main' }} />}>
                     <Grid container spacing={2}>
             {realmChapters.map((chapter, index) => (
               <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 1, bgcolor: 'background.default' }}>
                  <Typography variant="h3" sx={{ mr: 2 }}>
                    {chapter.icon}
                  </Typography>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {chapter.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {chapter.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        {/* Regional Chapters */}
        <SectionCard title="Regional Chapters" icon={<LocationIcon sx={{ fontSize: 32, color: 'success.main' }} />}>
          <Stack spacing={2}>
            {regionalChapters.map((chapter, index) => (
              <Paper 
                key={index} 
                elevation={1} 
                sx={{ 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <Typography variant="h4" sx={{ mr: 2 }}>
                  {chapter.icon}
                </Typography>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {chapter.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {chapter.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </SectionCard>

        {/* Ceremonial Greetings */}
        <SectionCard title="Ceremonial Greetings" icon={<GreetingIcon sx={{ fontSize: 32, color: 'warning.main' }} />}>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            Each region maintains its local paddling greetings while recognizing all
          </Typography>
                     <Grid container spacing={2}>
             {greetings.map((greeting, index) => (
               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    textAlign: 'center',
                    bgcolor: 'warning.light',
                    color: 'warning.contrastText',
                    borderRadius: 2
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {greeting.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    "{greeting.greeting}"
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {greeting.region}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        {/* Member Ranks */}
        <SectionCard title="Member Ranks" icon={<RankIcon sx={{ fontSize: 32, color: 'info.main' }} />}>
                     <Grid container spacing={3}>
             {/* Initiate Levels */}
             <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, color: 'success.main', fontWeight: 600 }}>
                Initiate Levels
              </Typography>
              {memberRanks.initiate.map((member, index) => (
                <RankCard 
                  key={index}
                  rank={member.rank}
                  description={member.description}
                  level={member.level}
                  color={theme.palette.success.main}
                />
              ))}
            </Grid>

                         {/* Full Member Levels */}
             <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                Full Member Levels
              </Typography>
              {memberRanks.full.map((member, index) => (
                <RankCard 
                  key={index}
                  rank={member.rank}
                  description={member.description}
                  level={member.level}
                  color={theme.palette.primary.main}
                />
              ))}
            </Grid>

                         {/* Elite Levels */}
             <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, color: 'warning.main', fontWeight: 600 }}>
                Elite Levels
              </Typography>
              {memberRanks.elite.map((member, index) => (
                <RankCard 
                  key={index}
                  rank={member.rank}
                  description={member.description}
                  level={member.level}
                  color={theme.palette.warning.main}
                />
              ))}
            </Grid>
          </Grid>
        </SectionCard>

        {/* Motto */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: 3, 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #e3f2fd 0%, #f1f8e9 100%)',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
            IN VENTUS ET AQUA GLORIAM
          </Typography>
          <Typography variant="body1" color="text.secondary">
            In wind and water, glory
          </Typography>
        </Paper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Society Structure" />

export default SocietyStructurePage
