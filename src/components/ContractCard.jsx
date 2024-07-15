import { Box, CardContent, Typography } from '@mui/material'
import Title from './Title'
import CardInfoLine from './CardInfoLine'
import ContractStatus from './ContractStatus'

function ContractCard() {
  return (
    <Box
      sx={{
        width: '600px',
        height: '120px',
        borderRadius: '12px',
        border: '1px solid black'
      }}
    >
      <CardContent>
        <CardInfoLine
          props={{ left: 'Hợp đồng số', right: ' 90_2024_HDCN.MTAC)' }}
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
            right: '11-01-2024'
          }}
        />
        <ContractStatus />
      </CardContent>
    </Box>
  )
}

export default ContractCard
