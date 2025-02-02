import React from 'react'
import { Button, Flex, Grid } from '@chakra-ui/react'
import { Link, Route } from 'react-router-dom'

import TypographyPage from './pages/typography'
import ColorPage from './pages/color'
import Home from '../pages/home'

const UikitPage = () => {
  const containerStyle = {
    minHeight: '100vh',
    maxHeight: '100vh',
    flexDir: 'column',
    flexGrow: 1,
    overflow: 'hidden',
  }

  const pageStyle = {
    p: '60px',
    flexDir: 'column',
    flexGrow: 1,
    overflow: 'auto',
  }

  const backToHome = {
    name: 'Back to Home',
    path: '/',
    component: <Home />,
  }

  const navLinks = [
    {
      name: 'typography',
      path: '/typography',
      component: <TypographyPage pageStyle={pageStyle} />,
    },
    {
      name: 'color',
      path: '/color',
      component: <ColorPage pageStyle={pageStyle} />,
    },
  ]

  return (
    <Grid
      templateColumns={{ base: '200px 1fr' }}
      gap={0}
      flex="1"
      minHeight="100vh"
      maxHeight="100vh"
      overflow="hidden"
    >
      <Flex
        gap={'10px'}
        as="nav"
        direction="column"
        bg="#F8F9F9"
        py="56px"
        px="16px"
        align="flex-start"
        flex="1"
        overflowY="auto"
        minHeight="100vh"
        maxHeight="100vh"
      >
        {navLinks.map((link) => {
          return (
            <Button key={link.name} as={Link} to={`/uikit${link.path}`}>
              {link.name}
            </Button>
          )
        })}
        <Button as={Link} to={backToHome.path}>
          {backToHome.name}
        </Button>
      </Flex>
    </Grid>
  )
}

UikitPage.getTemplateName = () => 'UikitPage'
export default UikitPage
