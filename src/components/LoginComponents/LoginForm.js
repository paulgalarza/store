import React from 'react'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardTitle from 'material-ui/lib/card/card-title'
import RaisedButton from 'material-ui/lib/raised-button'
import CardText from 'material-ui/lib/card/card-text'
import classes from '../../styles/layout.scss'
import TextField from 'material-ui/lib/text-field'

const styles = {
  button: { width: '100%' }
}

export class LoginForm extends React.Component {

  render () {
    return (
      <Card className={classes['login-card']} rounded={false}>
        <CardTitle title='Iniciar sesion' />
        <CardText>
          <TextField
            floatingLabelText='Usuario'
          />
          <TextField
            floatingLabelText='Contraseña'
            type='password'
          />
        </CardText>
        <CardActions>
          <RaisedButton label='Iniciar sesión' primary style={styles.button} />
        </CardActions>
      </Card>
    )
  }
}

export default LoginForm
