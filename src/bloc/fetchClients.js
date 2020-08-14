import {
    fetchClientsPending,
    fetchClientsSuccess,
    fetchClientsError,
} from "../store/action";

import axios from "axios";

function fetchClients() {
    return (dispatch) => {
         
        dispatch(fetchClientsPending());
        axios
            .get("https://learner-list-api.herokuapp.com/learners"
            )
            .then((res) => res.data)
            .then((clients) => {
                console.log(clients)
                dispatch(fetchClientsSuccess(clients));
               
                return clients;
            })
            .catch((error) => {
                console.log(error)
                dispatch(fetchClientsError(error));
            });
    };
}

export default fetchClients;
