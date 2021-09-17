import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
        
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#dfe6e9',
            color: '#636e72',

        }
    },
    row: {
        '& > *': {
            background: '#f9f9f9',
            fontSize: 18,
            marginBottom : '10px',
           
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
       
                <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>FirstName</TableCell>
                    <TableCell>LastName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user.firstName  }</TableCell> 
                        <TableCell>{user.lastName }</TableCell>
                        <TableCell>{user.email }</TableCell>
                        <TableCell>
                            <Button size="small" color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button size="small" color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
           
        
    )
}

export default AllUsers;