import {  useEffect, useState } from 'react'
import './App.css'
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

// jsx = javascript+xml ce seamana cu html
function App() {
// specify the type at the highest level posible "useState" here so the TS inference to know what type is and object  
 const[activities,setActivities] = useState<Activity[]>([]);
 //this is a hook
 //if an effect is used and the app in main.tsx is in strict mode 
 //it will call the request twice 
 useEffect(() =>{
  //this is the code that happens when the component is loaded
  axios.get<Activity[]>('https://localhost:5001/api/activities')
  .then(response => setActivities(response.data))
  return() => {}
 },[])
 // here it can return jsut one thing so all should be contained in a single statement
  return (
    <>
  
      <Typography variant='h3'>Events</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>
              {activity.title}
            </ListItemText>
            </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
