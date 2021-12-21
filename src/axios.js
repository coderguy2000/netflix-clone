import axios from "axios";


/* base url to make requests to the movie database*/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

/*use of axios
instance.get('/foo-bar'); //https://api.themoviedb.org/3/foo-bar
*/


export default instance;

