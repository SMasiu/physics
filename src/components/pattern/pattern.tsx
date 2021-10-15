import { Box, Card, colors, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Pattern as PatternType } from '../../types/pattern.types'
import { Context, Node } from 'react-mathjax2'
import { LegendItem } from '../legend-item/legend-item'
import { LegendItem as LegendItemType } from '../../types/pattern.types'

interface Props {
  pattern: PatternType
}

export const Pattern: React.FC<Props> = ({ pattern }) => {
  const [showUnits, setShowUnits] = useState(false)

  return (
    <Card sx={{ backgroundColor: colors.grey[100] }}>
      <Box p={4}>
        <Context input="ascii">
          <>
            <Typography variant="h5">{pattern.title}</Typography>
            <Box mt={2} onClick={() => setShowUnits((prev) => !prev)} sx={{ cursor: 'pointer' }}>
              <Node>{pattern[showUnits ? 'patternWithUnits' : 'pattern']}</Node>
            </Box>
            <Box mt={2}>
              <Typography variant="h6">Legenda:</Typography>
              {pattern.legend.map((item: LegendItemType) => (
                <Box mt={2}>
                  <LegendItem legend={item} key={item.variable} />
                </Box>
              ))}
            </Box>
          </>
        </Context>
      </Box>
    </Card>
  )
}
