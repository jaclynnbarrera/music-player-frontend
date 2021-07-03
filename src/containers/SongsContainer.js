// import React from "react";
// import Songs from "../components/Songs";
// import Song from "../components/Song";
// import { connect } from "react-redux";
// import fetchSongs from "../actions/fetchSongs.js";
// import { Route } from "react-router-dom";
// import DailyPickContainer from "./DailyPickContainer";

// class SongsContainer extends React.Component {
//   componentDidMount() {
//     this.props.fetchSongs();
//   }

//   render() {
//     console.log("songs container");
//     return (
//       <>
//         <Route exact path="/songs">
//           <Songs songs={this.props.songs} />
//         </Route>
//         <Route
//           exact
//           path="/songs/:id"
//           render={(routerProps) => (
//             <Song songs={this.props.songs} {...routerProps} />
//           )}
//         />
//         <Route exact path="/">
//           <DailyPickContainer song={this.props.songs} />
//           <FeaturedSongs songs={this.props.songs} />
//         </Route>
//       </>
//     );
//   }
// }

// function mapStateToProps(state) {
//   console.log("songs container mapstatetoprops");
//   return { songs: state.songs };
// }

// export default connect(mapStateToProps, { fetchSongs })(SongsContainer);
