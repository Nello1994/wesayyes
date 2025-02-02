/* istanbul ignore file */
// NOTE!
// This file is being ignored in the test coverage report for now. It reports `0%` functions
// tested, which brings down the overall coverage and blocks CI. There are tests still, but
// we don't want it to count toward coverage until we figure out how to cover the `functions`
// metric for this file in its test.

import React from 'react'
import loadable from '@loadable/component'
import { Redirect } from 'react-router'

// Components
import { Skeleton } from '@salesforce/retail-react-app/app/components/shared/ui'
import { configureRoutes } from '@salesforce/retail-react-app/app/utils/routes-utils'

const fallback = <Skeleton height="75vh" width="100%" />

// Pages
const Home = loadable(() => import('./pages/home'), { fallback })

//NOT ON PRODUCTION ENVIROMENT
const UikitPage = loadable(() => import('./uikit'), { fallback })

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/uikit',
    component: UikitPage,
  },
]
