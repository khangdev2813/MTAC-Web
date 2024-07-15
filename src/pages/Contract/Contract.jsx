import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Orders from '../../components/Orders'

import ContractTypeSelect from '../../components/ContractTypeSelect'
import ContractCard from '../../components/ContractCard'

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

export default function Contract() {
  return (
    <Box
      component="main"
      sx={{
        overflow: 'auto',
        width: '100%'
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Select contract type */}
        <Box>
          <ContractTypeSelect />
        </Box>
        <ContractCard />
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  )
}
