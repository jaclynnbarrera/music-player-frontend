export default function searchSong(searchTerm) {
  console.log("in search song");
  return { type: "SEARCH", payload: searchTerm };
}
