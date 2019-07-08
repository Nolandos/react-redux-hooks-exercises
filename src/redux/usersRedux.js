//ACTIONS
export const search = (users) => ({type: 'SEARCH_USERS', users});
export const getDataRequested = () => ({type: 'GET_DATA_REQUESTED'});  
export const getDataDone = () => ({type: 'GET_DATA_DONE'});
export const errorRequest = (err) => ({type: 'ERROR_REQUEST', err});

//THUNKS
export const showUsers = (searchText) => {
    return async dispatch => {
      const url = `https://api.github.com/search/users?q=${searchText}`;
      dispatch(getDataRequested());
      
      try {
        await new Promise((resolve, reject) => setTimeout(resolve, 4000));
        let response = await fetch(url);
        if(response.ok === false) {    //Tutaj dodałem if'a, bo np błąd sieci catch wyłapywał ale już "wpisanie niczego", niby błąd z api przyszedł ale nie łapał
            dispatch(errorRequest(response.status));
        } else {
            response = await response.json();
            dispatch(getDataDone());
            dispatch(search(response.items));
        } 
      }
      catch (err) {
        dispatch(errorRequest(err.message));
      }
    } 
}

//INITIAL STATE
const initialState = {
    users: [],
    request: {
        pending: false,
        success: null,
        error: null,
    }
}

//REDUCER
export default function usersReducer(state = initialState, action={}) {
    switch (action.type) {
        case 'SEARCH_USERS':
            return { ...state, users: action.users};
        case 'GET_DATA_REQUESTED':
            return { ...state, request: { pending: true } , users:[] };
        case 'GET_DATA_DONE':
            return { ...state, request: { pending: false, success: true } };
        case 'ERROR_REQUEST':
            return { ...state, request: { pending: false, success: false, error: action.err } };
        default:
            return state;
    }
};
