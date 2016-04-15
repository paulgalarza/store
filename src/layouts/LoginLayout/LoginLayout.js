import React, { PropTypes } from 'react'
import '../../styles/layout.scss'

export class LoginLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default LoginLayout
