export default function addComment(content, songId) {
  return fetch(
    `https://calm-basin-04200.herokuapp.com/songs/${songId}/comments`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    }
  )
    .then((r) => r.json())
    .then((song) => console.log(song));
  // .then((data) => console.log(data));
}
