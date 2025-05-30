import { Paper, Typography, List, ListItem, Chip, ListItemAvatar, Avatar, ListItemText, Grid2 } from "@mui/material";

type Props = {
    activity: Activity
}

export default function ActivityDetailsSidebar({ activity }: Props) {
    const following = true;
    return (
        <>
            <Paper
                sx={{
                    textAlign: 'center',
                    border: 'none',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    p: 2,
                }}
            >
                <Typography variant="h6">
                    {activity.attendees.length}
                </Typography>
            </Paper>
            <Paper sx={{ padding: 2 }}>
                {activity.attendees.map(atendee => (
                    <Grid2 key={atendee.id} container alignItems="center">
                        <Grid2 size={8}>
                            <List sx={{ display: 'flex', flexDirection: 'column' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="rounded"
                                            alt={atendee.displayName + 'image'}
                                            src={atendee.imageUrl}
                                            sx={{ width: 75, height: 75, mr: 3 }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography variant="h6">{atendee.displayName}</Typography>
                                        {following && (
                                            <Typography variant="body2" color="orange">
                                                Following
                                            </Typography>
                                        )}
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid2>
                        <Grid2 size={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                            {activity.hostId === atendee.id && (
                                <Chip
                                    label="Host"
                                    color="warning"
                                    variant='filled'
                                    sx={{ borderRadius: 2 }}
                                />
                            )}

                        </Grid2>
                    </Grid2>
                ))}

            </Paper>
        </>
    );
}
