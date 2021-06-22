export default function fetchSongs() {
  return (dispatch) => {
    fetch("http://localhost:3000/songs")
      .then(function (response) {
        return response.json();
      })
      .then((songs) => {
        dispatch({ type: "FETCH_SONGS", payload: songs });
      });
  };
}
