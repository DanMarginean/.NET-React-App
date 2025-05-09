
// this is the type of reponse that the server it retrieves 
// is needed so that typescript to know what properties each "object" has
// if this was JS it whould not throw an typo 
type Activity = {
    id: string
    title: string
    date: string
    description: string
    category: string
    isCancelled: boolean
    city: string
    venue: string
    latitude: number
    longitude: number
}