import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function CardInfoLine({ props }) {
  console.log(props)
  const { left, right } = props
  return (
    <Box
      sx={{
        m: '8px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {left}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {right}
      </Typography>
    </Box>
  )
}
