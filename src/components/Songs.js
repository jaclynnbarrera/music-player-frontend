import React from 'react'

// class Songs extends React.Component {

//     render() {
//         console.log("songs render")
//         return (
//             <div className="songs-container">
//                 {this.props.songs.map(song => <div id={song.title.split(" ").join("")}>
//                     <img src={song.image_link}></img>
//                     <h2>{song.title} </h2>
//                     <h3>{song.artist}</h3>
//                     {/* <Link to={`/songs/${song.id}`} ></Link> */}
//                     </div>)}         
//             </div>
//         )
//     }
// }

// export default connect(mapStateToProps, {fetchSongs})(Songs)

const Songs = () => {
    return (
        <div>
            Songs Component
        </div>
    )
}

export default Songs