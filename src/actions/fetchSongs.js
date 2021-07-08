export default function fetchSongs() {
  return (dispatch) => {
    fetch("https://calm-basin-04200.herokuapp.com/songs")
      .then(function (response) {
        return response.json();
      })
      .then((songs) => {
        dispatch({ type: "FETCH_SONGS", payload: songs });
      });
  };
}
