export default function songsReducer(state = {songs: []}, action){
    console.log("in songs reducer")
    switch(action.type){
        // case "SEARCH":
        //     const song = state.songs.map(s => {
        //         if (s.title === action.payload) {
        //             return song
        //         }
    
        case "FETCH_SONGS":
            return {songs: action.payload}
        case "ADD_COMMENT":
            const songs = state.songs.map(song => {
                if (song.id === action.payload.id) {
                    return action.payload
            } else {
                return song
            }
        })
            return {...state, songs: songs}
        default:
            return state
    }
}

