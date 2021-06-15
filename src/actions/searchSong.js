export default function searchSong(search){
    console.log("in search song")
    return {type: "SEARCH", payload: search}  
}
