export default function songsReducer(
  state = { songs: [], searchResults: [] },
  action
) {
  console.log("in songs reducer");
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
    case "SEARCH":
      return {
        searchResults:
          state.songs &&
          state.songs.filter(
            (song) =>
              song.title.includes(action.payload) ||
              song.artist.includes(action.payload)
          ),
      };
    default:
      return state;
  }
}
