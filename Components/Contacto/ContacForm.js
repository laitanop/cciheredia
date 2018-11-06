import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
// import axios from 'axios';

const styles = theme => ({
  container: {
 
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
 
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#6A772A"
  },
});



class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            submitting: false,
            submitted: false

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      submitForm (data) {
        fetch('/api/contact', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          res.status === 200 ? this.setState({ submitted: true }) : ''
        })
      }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value });
    
  };
async handleSubmit(e) {
    e.preventDefault()
    const {name, email, message} = this.state

    const form = await axios.post('/api/form', {
        name,
        email,
        message
    })
    console.log(name, email, message)
   

}
  render() {
    const { classes } = this.props;

    return (
        <div>

 <form action="/send-email" method="post" className={classes.container} noValidate autoComplete="off" onSubmit={e => {
                    e.preventDefault()
                    validateForm() && this.submitForm(getPayload())
                  }}>
        <TextField
          id="filled-name"
          label="Nombre"
          className={classes.textField}
      
        name="name"
          onChange={this.handleChange}
          margin="normal"
          variant="filled"
        />
        
      
        <TextField
           id="filled-email"
           label="Correo"
           className={classes.textField}
   
        name="email"
           onChange={this.handleChange}
           margin="normal"
           variant="filled"
        />
       
       <div> <textarea   
             name="message"
           onChange={this.handleChange}
           rows="10" cols="55">
</textarea></div>
      
<div>
<Button onClick={this.handleSubmit} variant="contained" color="primary" className={classes.button}>
       Enviar
      </Button>


</div>

      </form>  
     
 
        </div>
      
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);