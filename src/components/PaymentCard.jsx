import { ListAlt } from '@mui/icons-material'
import { Box, Divider } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardInfoLine from './CardInfoLine'

export default function PaymentCard() {
  // const { contractNumber, expiredDate, payAmount, status } = props
  return (
    <Card sx={{ maxWidth: 400, width: 320 }}>
      <CardContent>
        <Box
          sx={{
            m: '8px 0 10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <ListAlt />

            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              Số hợp đồng
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="bold"
          ></Typography>
        </Box>
        <Divider />
        <CardInfoLine
          props={{ left: 'Số hóa đơn', right: ' 1412 (31/05/2024)' }}
        />

        <CardInfoLine
          props={{ left: 'Ngày thanh toán', right: '20-06-2024' }}
        />

        <CardInfoLine
          props={{
            left: 'Số tiền đã thanh toán',
            right: '7.600.000đ'
          }}
        />
      </CardContent>
      <CardActions sx={{}}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Button
            size="small"
            sx={{
              width: '130px',
              textTransform: 'none',
              fontWeight: 'bold',
              border: '1px solid black',
              borderRadius: '8px',
              p: 1
            }}
          >
            Xem hóa đơn
          </Button>
          <Button
            size="small"
            sx={{
              width: '130px',
              textTransform: 'none',
              fontWeight: 'bold',
              border: '1px solid black',
              borderRadius: '8px',
              p: 1
            }}
          >
            Xem chi tiết
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
