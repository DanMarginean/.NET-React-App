import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../lib/hooks/useActivities";

// type Props = {
//     activities : Activity[]
//     selectActivity: (id : string) => void
//     // deleteActivity: (id : string) => void
// }

export default function ActivityList() {

const{activities, isLoading} = useActivities();

if ( isLoading) return <Typography>Loading...</Typography>

if(!activities) return <Typography>No activity found</Typography>

  return (
   <Box sx={{display:'flex', flexDirection: "column", gap:3}}>
        {activities.map(activity => ( //using round brackets only when returning 1 object for more use {}
            <ActivityCard 
            key={activity.id} 
            activity={activity} 
            // selectActivity ={selectActivity}
            // deleteActivity ={deleteActivity}
            />
        ))}
   </Box>
  )
}