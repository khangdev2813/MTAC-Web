import { Box, Button, CardActions, CardContent } from '@mui/material'
import CardInfoLine from './CardInfoLine'
import ContractStatus from './ContractStatus'

function ContractCard() {
  return (
    <Box
      sx={{
        width: '500px',
        borderRadius: '12px',
        border: '1px solid black'
      }}
    >
      <CardContent sx={{ position: 'relative', p: 1 }}>
        <CardInfoLine
          props={{
            left: 'Hợp đồng số',
            right: ' 90_2024_HDCN.MTAC)',
            rightBold: true
          }}
        />
        <CardInfoLine
          props={{
            left: 'Nội dung',

            right: 'Vận chuyển, xử lý chất thải công nghiệp'
          }}
        />
        <CardInfoLine
          props={{
            left: 'Thời hạn',
            right: '11-01-2024',
            leftBold: true,
            rightBold: true
          }}
        />
        <CardActions></CardActions>
        <ContractStatus props={{ isActive: false }} />
      </CardContent>
    </Box>
  )
}

export default ContractCard
