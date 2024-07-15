import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import ContractCard from '../../components/ContractCard'
import ContractTypeSelect from '../../components/ContractTypeSelect'

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
        <Box sx={{ mb: 1 }}>
          <ContractTypeSelect />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <ContractCard />
          <ContractCard />
          <ContractCard />
          <ContractCard />
        </Box>
      </Container>
    </Box>
  )
}
