
import React from 'react'
import { Button, ListItem } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText';
import {db} from '../firebaseConfig'


export default function TodolistItem({todo, inProgress, id}) {

    function toggleInProgress(){
        db.collection("Todos").doc(id).update({
            // If false => true, if True => false
            inProgress:!inProgress
        })
    }
    
    console.log(inProgress);
    return (
        <div className='list' style={{display:"flex",
        maxWidth:'900px',
        width:'300px'}}>
    <ListItem>
       <ListItemText primary={todo}
       secondary={inProgress?"In Progress":"Completed"}/> 
    </ListItem>
    <Button 
    onClick={toggleInProgress}
    >{inProgress?"✔️":"UNDONE"}</Button>
    <Button>❌</Button>
        </div>
    );
    
}
