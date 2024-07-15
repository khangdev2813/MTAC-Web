import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Orders from '../../components/Orders'
import PaymentCard from '../../components/PaymentCard'
import { Grid } from '@mui/material'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function PaymentPage() {
  return (
    <Box
      component="main"
      sx={{
        overflow: 'auto',
        width: '100%'
      }}
    >
      <Toolbar />
      <Container maxWidth="" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{}}>
          <Grid container spacing={4} columns={16} sx={{ mb: '16px' }}>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
          </Grid>
          <Grid container spacing={4} columns={16} sx={{ mb: '10px' }}>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
