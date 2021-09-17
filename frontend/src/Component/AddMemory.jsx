import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    firstName: ''  ,
    lastName :'' ,
    email : ''
   
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { firstName, lastName,email } = user;
    const classes = useStyles();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        const res = await addUser(user);
        console.log(res)
        history.push('/');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Memory</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">FirstName</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='firstName' value={firstName} id="my-input" />
            </FormControl>
           
            <FormControl>
                <InputLabel htmlFor="my-input">LastName</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Memory</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;