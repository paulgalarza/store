import React from 'react'
import Image from './Main.jpg'
import classes from 'styles/login.scss'

export class MainImage extends React.Component {
  render () {
    return (
      <div>
        <img
          src={Image}
          className={classes['main-image']}
        />
      </div>
    )
  }
}

export default MainImage
