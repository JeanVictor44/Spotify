import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { RootContext } from './context'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootContext>
      <RouterProvider router={router}/>
    </RootContext>
  </React.StrictMode>,
)
