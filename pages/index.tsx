import { NextPage } from 'next'
import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from '@/components/atoms'
import { Page } from '@/components/templates/page'

const Home: NextPage = () => {
  return (
    <Page title="Home" desc="Home">
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Box maxWidth="sm">
            <Button variant="contained" component={Link} noLinkStyle href="/about">
              Go to the About page
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  )
}

export default Home
