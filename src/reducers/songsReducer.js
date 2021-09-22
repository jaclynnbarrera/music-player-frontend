export default function songsReducer(state = { songs: [] }, action) {
  switch (action.type) {
    case "FETCH_SONGS":
      return { songs: action.payload };
    case "ADD_COMMENT":
      const songs = state.songs.map((song) => {
        if (song.id === action.payload.id) {
          return action.payload;
        } else {
          return song;
        }
      });
      return { ...state, songs: songs };
    default:
      return state;
  }
}
