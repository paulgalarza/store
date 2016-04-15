import React from 'react'
import MainImage from './Main.jpg'
import classes from '../../styles/layout.scss'

export class MainImageComponent extends React.Component {
  render () {
    return (
      <div>
        <img src={MainImage} className={classes['main-image']}/>
      </div>
    )
  }
}

export default MainImageComponent
