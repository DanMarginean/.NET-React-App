import { Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router"

export default function ServerError() {
    const { state} = useLocation();
  return (
    <Paper>
        {
            state.error ? (
                <>
                    <Typography gutterBottom variant="h3" sx={{px:4, pt:2}} color="secondary">
                        {state.error.message || " The server is not responding"}
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" sx={{p:4}}>
                        {state.error?.details || 'Internal server error '}
                    </Typography>
                </>
            )  :(
                <Typography variant="h5">Server Error </Typography>
            )
        }
    </Paper>
  )
}
