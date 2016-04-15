import React from 'react'
import MainImage from '../../components/LoginComponents/MainImageComponent'
import LoginForm from '../../components/LoginComponents/LoginForm'

export class LoginView extends React.Component {
  render () {
    return (
      <div>
        <MainImage />
        <LoginForm />
      </div>
    )
  }
}

export default LoginView
