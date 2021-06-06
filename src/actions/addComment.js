export default function addComment(content, songId) {
  console.log("add comment action")
    return (dispatch) => {
      return fetch(`http://localhost:3000/songs/${songId}/comments`, {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({content})
      })
      .then(r => r.json())
      .then(song => dispatch({type: "ADD_COMMENT", payload: song}))
    }
}