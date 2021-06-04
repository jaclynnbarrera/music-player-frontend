export default function songsReducer(state = {songs: []}, action){
    console.log("in songs reducer")
    return state
    // switch(action.type){
    //     case "FETCH_SONGS":
    //         return {songs: action.payload}
    //     default:
    //         return state
    // }
}