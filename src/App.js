import React from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper' 
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}));

function App() {
  const classes = useStyles()
  return (
    <div className="App">
    <Paper className={classes.paper}>
      <h1>User Feedback</h1>
      <form className={useStyles.root} noValidate autoComplete="off">
        <div>
          <TextField style={{padding: "5px"}} label="First Name" />
          <TextField
            style={{padding: "5px"}}
            label="Last Name"
          />
        </div>
        <div style={{padding: "25px"}}>
        <TextField
            id="outlined-multiline-static"
            label="User Feedback"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
          />
        </div>
      </form>
      <div>
        <h3>Was your feedback positive or negative?</h3>
        <Grid id="top-row" container spacing={24} direction="row" justify="center" alignItems="center">
          <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
              <FormControlLabel
                value="positive"
                control={<Radio color="primary" />}
                label="🙂 Positive"
                labelPlacement="top"
              />
              <FormControlLabel
                value="negative"
                control={<Radio color="primary" />}
                label="😟 Negative"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary">
          Submit Feedback
        </Button>
      </div>
    </Paper>
    </div>
  )
}

export default App
