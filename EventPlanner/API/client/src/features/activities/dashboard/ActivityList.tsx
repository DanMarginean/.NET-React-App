import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Fragment } from "react/jsx-runtime";

// type Props = {
//     activities : Activity[]
//     selectActivity: (id : string) => void
//     // deleteActivity: (id : string) => void
// }

export default function ActivityList() {

  const { activitiesGroup, isLoading } = useActivities();

  if (isLoading) return <Typography>Loading...</Typography>

  if (!activitiesGroup) return <Typography>No activity found</Typography>

  return (
    <Box sx={{ display: 'flex', flexDirection: "column", gap: 3 }}>
      {activitiesGroup.pages.map((activities, index) => (
        <Fragment key={index}>
          {activities.items.map(activity => ( //using round brackets only when returning 1 object for more use {}
            <ActivityCard
              key={activity.id}
              activity={activity}
            // selectActivity ={selectActivity}
            // deleteActivity ={deleteActivity}
            />
          ))}
        </Fragment>
      ))}

    </Box>
  )
}