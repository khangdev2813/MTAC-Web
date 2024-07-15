import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

function ContractStatus({ props }) {
  const { isActive = false } = props
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        bottom: '0',
        padding: '4px',
        height: '32px',
        backgroundColor: isActive ? '#086DB5' : 'red',
        borderTopRightRadius: '12px',
        borderBottomLeftRadius: '10px',

        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}
    >
      <CheckCircleOutline sx={{ color: 'white' }} />
      <Typography fontSize="small" sx={{ color: 'white' }}>
        Đang hiệu lực
      </Typography>
    </Box>
  )
}

export default ContractStatus
