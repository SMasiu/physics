import { Box } from '@mui/system'
import React from 'react'
import { Node } from 'react-mathjax2'
import { LegendItem as LegendItemType } from '../../types/pattern.types'
import styled from '@emotion/styled'

const PrimitiveText = styled.span`
  margin-left: 10px;
  color: #666666;
`

interface Props {
  legend: LegendItemType
}

export const LegendItem: React.FC<Props> = ({ legend }) => (
  <Box>
    <span>
      <Node>{legend.variable}</Node> - {legend.description}{' '}
      {legend.primitive && <PrimitiveText>(podstawowa jednostka układu si)</PrimitiveText>}
    </span>
  </Box>
)
