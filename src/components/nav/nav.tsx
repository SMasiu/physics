import { Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Nav = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ button: { alignSelf: 'center' } }}
      >
        <Tab label="Wzory" />
      </Tabs>
    </Box>
  )
}
