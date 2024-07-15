import { Box, Container, Grid, Toolbar } from '@mui/material'
import PaymentCard from '../../components/PaymentCard'
import Title from '../../components/Title'

function SupportPage() {
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
        <Title sx={{ fontWeight: 'bold' }}>Danh sách yêu cầu hỗ trợ</Title>
        <Box sx={{}}>
          <Grid container columns={16} sx={{ mb: '16px' }}>
            <Grid item spacing={3}>
              <PaymentCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default SupportPage
