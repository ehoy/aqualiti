/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { ThemeProvider, CssBaseline, createTheme, Box, Typography, Container, Divider } from '@mui/material';
import theme from './theme';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
          <Box component="footer" sx={{ mt: 6, py: 4 }}>
            <Container maxWidth="sm">
              <Divider sx={{ mb: 3, bgcolor: 'primary.light', opacity: 0.3 }} />
              <Box sx={{ textAlign: 'center', px: 2 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  © {new Date().getFullYear()} The Aqualiti &middot; 
                  <em style={{ color: theme.palette.primary.main }}> In Ventus et Aqua Gloriam</em>
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
                  Remember: Your mind is your worst enemy in technical conditions 🌊
                </Typography>
              </Box>
            </Container>
          </Box>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
