import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

export default function ProtectedRoute({Component}) {
    const MyProtectedComponent = withAuthenticationRequired(
      Component,
      {onRedirecting: () => <div>Redirecting you to the login...</div>}
      )
  return (
  <MyProtectedComponent />
  )
}
