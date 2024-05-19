/* import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { Margin, Padding } from '@mui/icons-material';

export default function User() {
    const paperStyle={Padding:'50px 20px', width:600, Margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[user,setUsers]=useState([])
    const classes = useStyles();

    const handleClick=(e)=>{
      e.preventDefault()
      const user={name,address}
      console.log(user)
      fetch("http://localhost:8080/user/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
  
    }).then(()=>{
      console.log("New User added")
    })
  }
  
  useEffect(()=>{
    fetch("http://localhost:8080/user/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setUsers(result);
    }
  )
  },[])


  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Add User</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="User name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="User address" variant="outlined" fullWidth 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />

     <Button variant="contained" onClick={handleClick}> Submit </Button>

    </Box>
        </Paper>


        <h1>Students</h1>

<Paper elevation={3} style={paperStyle}>

  {users.map(user=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
     Id:{user.id}<br/>
     Name:{user.name}<br/>
     Address:{user.address}

    </Paper>
    ))
  }


</Paper>

    </Container>
  );
} */

import * as React from 'react';
import { useState, useEffect } from 'react'; // Add this line
//import { makeStyles } from '@mui/styles'; // Add this line 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
//import { Margin, Padding } from '@mui/icons-material';

/*const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    margin: theme.spacing(1),
  }
}
}));*/

export default function User() {
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"} // 
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[user,setUsers]=useState([])
    //const classes = useStyles();

    const handleClick=(e)=>{
      e.preventDefault()
      const user={name,address}
      console.log(user)
      fetch("http://localhost:8080/user/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
  
    }).then(()=>{
      console.log("New User added")
    })
  }
  
  useEffect(()=>{
    fetch("http://localhost:8080/user/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setUsers(result);
    }
  )
  },[])


  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Add User</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="User name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="User address" variant="outlined" fullWidth 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />

     <Button variant="contained" onClick={handleClick}> Submit </Button>

    </Box>
        </Paper>


        <h1>Users</h1>

<Paper elevation={3} style={paperStyle}>

  {user.map(user=>( //users
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
     Id:{user.id}<br/>
     Name:{user.name}<br/>
     Address:{user.address}

    </Paper>
    ))
  }


</Paper>

    </Container>
  );
}
