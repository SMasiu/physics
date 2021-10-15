export interface LegendItem {
  variable: string
  description: string
  primitive: boolean
}

export interface Pattern {
  title: string
  pattern: string
  patternWithUnits: string
  legend: LegendItem[]
}
