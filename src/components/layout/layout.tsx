import { colors, Container, Grid, Typography } from '@mui/material'
import { Box, GlobalStyles } from '@mui/system'
import React from 'react'
import { Nav } from '../nav/nav'
import styled from '@emotion/styled'
import { globalStyles } from '../../styles/global-styles'

const LayoutWrapper = styled.section``

const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  width: 100%;
  max-width: 50px;
`

const ContentWrapper = styled.section`
  height: 100vh;
  overflow-y: auto;
`

interface Props {
  title: string
}

export const Layout: React.FC<Props> = ({ children, title }) => (
  <LayoutWrapper>
    <GlobalStyles styles={globalStyles} />
    <Grid container>
      <Grid item xs={3}>
        <Box sx={{ height: '100vh', backgroundColor: colors.grey[100] }}>
          <Box pt={4}>
            <LogoWrapper>
              <Logo src="images/atom.png" />
              <Box ml={2}>
                <Typography variant="h4">Physics</Typography>
              </Box>
            </LogoWrapper>
          </Box>
          <Box mt={4}>
            <Nav />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <ContentWrapper>
          <Box p={8}>
            <Container maxWidth="lg">
              <Typography variant="h3">{title}</Typography>

              <Box mt={4}>{children}</Box>
            </Container>
          </Box>
        </ContentWrapper>
      </Grid>
    </Grid>
  </LayoutWrapper>
)
