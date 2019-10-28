import React from "react";
import { Component } from "react";
import classnames from "classnames";

export default class GithubRibbon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        className={"github-ribbon attachment-full size-full"}
        href={`https://github.com/${this.props.repo}`}
      >
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
    );
  }
}
