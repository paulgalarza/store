import React, { PropTypes } from 'react'

export class LoginLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}

export default LoginLayout
