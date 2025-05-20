import { Button, Card,  CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities";

// type Props = {
//     selectedActivity : Activity
//     cancelSelectActivity : () => void
//     openForm:(id:string) => void
// }

export default function ActivityDetails() {
  
  const navigate = useNavigate();
  const {id} = useParams();
  const {activity, isLoadingActivity} = useActivities(id);
  // const {activities} = useActivities();
  // const activity = activities?.find(x => x.id === selectedActivity.id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>
  if (!activity) return <Typography> Loading...</Typography>

  return (
    <Card sx={{borderRadius:3}}>
        <CardMedia
        component='img'
        src={`/images/categoryImages/${activity.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
            <Typography variant="body1">{activity.description}</Typography>
        </CardContent>
        <CardActions>
            <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
            <Button onClick={() => navigate('/activities')} color="inherit">Cancel</Button>
        </CardActions>
    </Card>
  )
}
