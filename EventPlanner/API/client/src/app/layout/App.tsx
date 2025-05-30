import './App.tsx'
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar.tsx';
import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage.tsx';

// jsx = javascript+xml ce seamana cu html
function App() {
  const location = useLocation();
    // here it can return jsut one thing so all should be contained in a single statement
    return (
      <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh'}}>
        <ScrollRestoration/>
        <CssBaseline></CssBaseline>
        {location.pathname === '/' ? <HomePage/> : (
          <>
        <NavBar/>
        <Container maxWidth='xl' sx={{ mt: 3 }}>
         <Outlet/>
        </Container>
          </>
        )}
  

      </Box>
    )
  }


  export default App

//  <ActivityDashboard 
//               // activities={activities}
//               // selectActivity={handleSelectActivity}
//               // cancelSelectActivity={handleCancelSelectActivity}
//               // selectedActivity={selectedActivity}
//               // editMode={editMode}
//               // openForm={handleOpenForm}
//               // closeForm={handleFormClose}
//               // submitForm={handleSubmitForm}
//               // deleteActivity={handleDelete}
//             />


    // specify the type at the highest level posible "useState" here so the TS inference to know what type is and object  
  // const [activities, setActivities] = useState<Activity[]>([]);
  // const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  // const [editMode, setEditMode] = useState(false);
  // const{activities, isPending} = useActivities();


  //this is a hook
  //if an effect is used and the app in main.tsx is in strict mode 
  //it will call the request twice 
  // useEffect(() => {
  //   //this is the code that happens when the component is loaded
  //   axios.get<Activity[]>('https://localhost:5001/api/activities')
  //     .then(response => setActivities(response.data))
  //   return () => { }
  // }, [])

  // const { data: activities, isPending } = useQuery({
  //   queryKey: ['activities'],
  //   queryFn: async () => {
  //     const response = await axios.get<Activity[]>('https://localhost:5001/api/activities')
  //     return response.data;
  //   }
  // })

  // const handleSelectActivity = (id: string) => {
  //   setSelectedActivity(activities!.find(x => x.id === id));
  // }

  // const handleCancelSelectActivity = () => {
  //   setSelectedActivity(undefined);
  // }

  // const handleOpenForm = (id?: string) => {
  //   if (id) handleSelectActivity(id);
  //   else handleCancelSelectActivity();
  //   setEditMode(true);
  // }

  // const handleFormClose = () => {
  //   setEditMode(false);
  // }

  // const handleSubmitForm = (activity: Activity) => {
  //   // if (activity.id) {
  //     //   setActivities(activities.map(x => x.id === activity.id ? activity : x))
  //     // }
  //     // else{
  //     //   const newActivity = {...activity, id: activities.length.toString()}
  //     //   setSelectedActivity(newActivity)
  //     //   setActivities([...activities, newActivity])
  //     // }
  //     console.log(activity)
  //     setEditMode(false)
  //   }

    // const handleDelete = (id: string) => {
    //   // setActivities(activities.filter(x => x.id !== id))
    //   console.log(id)
    // }

