import React from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


function App() {
  return (
    <div className="App">
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
      <Button variant="contained" color="primary">
        Submit Feedback
      </Button>
    </div>
    </div>
  )
}

export default App
