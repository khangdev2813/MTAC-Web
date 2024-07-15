import { Business } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

function UserInfo() {
  return (
    <Box
      sx={{
        m: '0 10px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Box>
        <Business />
      </Box>
      <Box>
        <Typography
          component="h1"
          variant="inherit"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Khang Nguyễn
        </Typography>
        <Typography
          component="h1"
          variant="inherit"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          MST: Khách hàng cá nhân
        </Typography>
      </Box>
    </Box>
  )
}

export default UserInfo
