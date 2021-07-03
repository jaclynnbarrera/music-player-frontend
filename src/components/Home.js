import React from "react";
import { connect } from "react-redux";
import fetchSongs from "../actions/fetchSongs";
import DailyPickContainer from "../containers/DailyPickContainer";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    console.log("home");
    return (
      <div>
        <DailyPickContainer song={this.props.songs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { fetchSongs })(Home);
