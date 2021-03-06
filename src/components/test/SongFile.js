import React, { Component } from "react";
// import spotifyAPIManager from "../../modules/spotifyAPIManager"
import { Button } from "reactstrap";

export default class SongFile extends Component {
  state = {
    disableButton: false
  };

  handleClick = event => {
    this.setState({ disableButton: true });
    this.props.addToQuiz(this.props.track);
  };

  handleDelete = event => {
    this.setState({ disableButton: false });
    this.props.removeFromQuiz(this.props.track);
  };

  render() {
    const {
      album: albumName,
      artists: artistName,
      name: trackName
    } = this.props.track;

    return (
      <tr>
        <td className="text-center">{this.props.index}</td>
        <td>{trackName}</td>
        <td>{artistName}</td>
        <td className="text-center">{albumName}</td>

        <td className="text-right">
          <Button
            disabled={this.state.disableButton}
            onClick={this.handleClick}
            className="btn-icon"
            color="success"
            size="md"
          >
            Add
          </Button>
          {` `}
          {/* <Button onClick={this.handleDelete} disabled={!this.state.disableButton} className="btn-icon" color="danger" size="sm">
                    Remove
                </Button> */}
        </td>
      </tr>
    );
  }
}
