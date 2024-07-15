import {
  AccountCircle,
  GavelOutlined,
  LocalShipping,
  Payment,
  SupportAgent
} from '@mui/icons-material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Divider, List, ListSubheader } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link, useNavigate } from 'react-router-dom'

function Navigate() {
  const navigate = useNavigate()

  const mainList = [
    {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/'
    },
    {
      name: 'Hợp đồng',
      icon: <GavelOutlined />,
      link: '/contract'
    },
    {
      name: 'Thu gom',
      icon: <LocalShipping />,
      link: '/picking'
    },
    {
      name: 'Thanh toán',
      icon: <Payment />,
      link: '/payment'
    },
    {
      name: 'Yêu cầu hỗ trợ',
      icon: <SupportAgent />,
      link: '/support'
    }
  ]

  const secondList = [
    {
      name: 'Current month',
      icon: <AssignmentIcon />,
      link: '/report'
    },
    {
      name: 'Current month',
      icon: <AssignmentIcon />,
      link: '/report'
    },
    {
      name: 'Current month',
      icon: <AssignmentIcon />,
      link: '/report'
    },
    {
      name: 'Current month',
      icon: <AssignmentIcon />,
      link: '/report'
    },
    {
      name: 'Current month',
      icon: <AssignmentIcon />,
      link: '/report'
    }
  ]

  const ThirdList = [
    {
      name: 'Tài khoản',
      icon: <AccountCircle />,
      link: '/account'
    }
  ]

  return (
    <>
      {mainList.map((item, index) => (
        <ListItemButton component={Link} key={index} to={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
      <Divider />

      {/* Second */}
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      {secondList.map((item, index) => (
        <ListItemButton component={Link} key={index} to={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
      <Divider />
      {/* Third */}
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      {ThirdList.map((item, index) => (
        <ListItemButton component={Link} key={index} to={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
    </>
  )
}

export default Navigate
