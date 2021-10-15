import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import patterns from '../../data/patterns.json'
import { Pattern as PatternType } from '../../types/pattern.types'
import { Pattern } from '../pattern/pattern'

export const PatternList = () => {
  const [filteredPatterns, setFilteredPatterns] = useState<PatternType[]>([...patterns])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const searchRegEx = new RegExp(search, 'i')

    setFilteredPatterns(patterns.filter((p) => p.title.match(searchRegEx)))
  }, [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Box>
      <TextField fullWidth label="Search" onChange={handleChange} />
      <Box mt={4}>
        {filteredPatterns.map((pattern: PatternType) => (
          <Box mb={4}>
            <Pattern pattern={pattern} key={pattern.title} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
