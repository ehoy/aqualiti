import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box, Typography, Container, Paper, Accordion, AccordionSummary, AccordionDetails, TextField, List, ListItem, ListItemText, Alert } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import rulesData from "../data/aquality-rules.json"

// Generate 100 sample rules
const rules = rulesData

const IndexPage = () => {
  const [search, setSearch] = React.useState("")
  const filteredRules = rules.filter(rule => {
    const searchLower = search.toLowerCase();
    return (
      rule.title.toLowerCase().includes(searchLower) ||
      rule.description.toLowerCase().includes(searchLower) ||
      (rule.list && rule.list.some(item => item.toLowerCase().includes(searchLower))) ||
      (rule.note && rule.note.toLowerCase().includes(searchLower))
    );
  })

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ mt: 0, p: { xs: 2, sm: 4 }, textAlign: 'center', background: 'linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)', color: '#fff' }}>
          <Typography variant="h2" component="div" sx={{ fontWeight: 700, mb: 0 }}>
            The Aqualiti
          </Typography>
          <Typography variant="body1">
            IN VENTUS ET AQUA GLORIAM 
          </Typography>
        </Paper>
        <Paper elevation={2} sx={{ mt: 4, p: { xs: 2, sm: 3 }, background: '#fff' }}>
          <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
           The Rules
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Remember, fellow seekers of wave and wind, these Rules are not mere guidelines but the collected wisdom of countless swims, epic runs, and coffee shop debates. They have been tested in conditions from duck farts to liquid himalayas, proven in waters from the Cape to the Pacific, and refined over countless dawn patrols and downwind runs.
          </Typography>
          <TextField
            fullWidth
            label="Search rules"
            variant="outlined"
            size="small"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ mb: 2 }}
            inputProps={{ 'aria-label': 'search rules' }}
          />
          <Box>
            {filteredRules.length === 0 ? (
              <Typography variant="body2" color="text.secondary">No rules found.</Typography>
            ) : (
              filteredRules.map((rule, idx) => (
                <Accordion key={rule.number || idx} sx={{ mb: 1 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {rule.number ? `Rule ${rule.number}: ` : ''}{rule.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ mb: rule.list ? 1 : 0 }}>{rule.description}</Typography>
                    {rule.list && (
                      <List dense sx={{ pl: 2, mb: rule.note ? 2 : 0 }}>
                        {rule.list.map((item, i) => (
                          <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                            <ListItemText primaryTypographyProps={{ variant: 'body2' }} primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    )}
                    {rule.note && (
                      <Alert severity="info" icon={false} sx={{ mt: 1, fontSize: '0.95rem', px: 2, py: 1 }}>
                        {rule.note}
                      </Alert>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))
            )}
          </Box>
        </Paper>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
