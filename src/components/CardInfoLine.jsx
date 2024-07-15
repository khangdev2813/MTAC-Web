import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function CardInfoLine({ props }) {
  const { left, right, rightBold = false, leftBold = false } = props
  return (
    <Box
      sx={{
        m: '8px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={leftBold && { fontWeight: 'bold' }}
      >
        {left}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={rightBold && { fontWeight: 'bold' }}
      >
        {right}
      </Typography>
    </Box>
  )
}
