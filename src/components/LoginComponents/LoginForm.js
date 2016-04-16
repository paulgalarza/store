import React, {PropTypes} from 'react'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardTitle from 'material-ui/lib/card/card-title'
import RaisedButton from 'material-ui/lib/raised-button'
import CardText from 'material-ui/lib/card/card-text'
import classes from 'styles/login.scss'
import TextField from 'material-ui/lib/text-field'

const styles = {
  button: { width: '100%' }
}

export class LoginForm extends React.Component {

  static childContextTypes = {
    username: PropTypes.string,
    password: PropTypes.string
  }

  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  login = (event) => {
    console.log('login: ', this.state)
  }

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  render () {
    return (
      <Card
        className={classes['login-card']}
        rounded={false}
      >
        <CardTitle
          title='Iniciar sesion'
        />
        <CardText>
          <TextField
            floatingLabelText='Usuario'
            onChange={this.handleChange('username')}
          />
          <TextField
            floatingLabelText='Contraseña'
            type='password'
            onChange={this.handleChange('password')}
          />
        </CardText>
        <CardActions>
          <RaisedButton
            label='Iniciar sesión'
            primary
            style={styles.button}
            onClick={this.login}
          />
        </CardActions>
      </Card>
    )
  }
}

export default LoginForm
