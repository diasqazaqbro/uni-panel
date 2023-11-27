import { createBrowserRouter } from 'react-router-dom'
import LayoutComponent from '../layout/LayoutComponent'
import { ROUTERS_CONSTANTS } from '../../shared/config/routes'
import Students from '../../pages/Students'
import Groups from '../../pages/Groups'
import Schedule from '../../pages/Schedule'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'

export const appRouter = () =>
  createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <LayoutComponent>
            <Home/>
          </LayoutComponent>,
        },
      ],
    },
    {
      children: [
        {
          path: ROUTERS_CONSTANTS.STUDENTS,
          element: <LayoutComponent>
            <Students/>
          </LayoutComponent>,
        },
      ],
    },
    {
      children: [
        {
          path: ROUTERS_CONSTANTS.GROUPS,
          element: <LayoutComponent>
            <Groups/>
          </LayoutComponent>,
        },
      ],
    },
    {
      children: [
        {
          path: ROUTERS_CONSTANTS.SCHEDULE,
          element: <LayoutComponent>
            <Schedule/>
          </LayoutComponent>,
        },
      ],
    },
    {
      children: [
        {
          path: ROUTERS_CONSTANTS.PROFILE,
          element: <LayoutComponent>
            <Profile/>
          </LayoutComponent>,
        },
      ],
    }
  ])