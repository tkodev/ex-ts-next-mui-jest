import { NextPage } from 'next'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from '@/frontend/components/link';
import { Layout } from '@/frontend/components/layout'

const Home: NextPage = () => {
  return (
    <Layout title='Home' desc='Home'>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
    </Layout>
  )
}

export default Home
