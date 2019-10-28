import React from "react";
import { Component } from "react";

export default class YouTube extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src={this.props.video}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>
    );
  }
}
