import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material'
import { useState } from 'react'

function ContractTypeSelect() {
  const { type, setType } = useState()
  const handleChange = (event) => {
    const selectMode = event.target.value
    setType(selectMode)
    console.log(selectMode)
  }

  return (
    <FormControl sx={{ m: 0, width: 180 }}>
      <InputLabel id="label-select-dark-light-mode" sx={{}}>
        Loại hóa đơn
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={type}
        lable="Mode"
        onChange={handleChange}
        sx={{
          backgroundColor: 'white'
        }}
      >
        <MenuItem value="active">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 'bold'
            }}
          >
            <Typography
              component="h2"
              variant="inherit"
              color="primary"
              gutterBottom
            >
              Đang hiệu lực
            </Typography>
          </div>
        </MenuItem>
        <MenuItem value="expired">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 'bold'
            }}
          >
            <Typography
              component="h2"
              variant="inherit"
              color="primary"
              gutterBottom
            >
              Đã hết hạn
            </Typography>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ContractTypeSelect
