export default function songsReducer(state = {songs: []}, action){
    switch(action.type){
        case "FETCH_SONGS":
            return {songs: action.payload}
        default:
            return state
    }
}