import React from "react";
import Head from "../components/head";
import { Component } from "react";
import YouTube from "../components/youtube";
import GithubRibbon from "../components/github-ribbon";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title:
        "UV.pub",
      repo: "UniversalViewer/uv.pub",
      strapline:
        "✨ File Storage and Sharing for Everyone ✨",
      video: "https://www.youtube.com/embed/e_PXtXKiz68"
    }
  }

  render() {
    return (
      <>
        <Head title={ this.state.title }></Head>

        <GithubRibbon repo={ this.state.repo } />

        <header className={"mw5 mw7-ns center pa3 ph5-ns"}>
          <h1 className={"tc"}>{ this.state.title }</h1>
          <p className={"tc pa3"}>{ this.state.strapline }</p>

          <div>
            <YouTube video={ this.state.video }></YouTube>
          </div>
        </header>

        <main className={"mw5 mw7-ns center pa3 ph5-ns"}>
          UV.pub is a desktop tool for publishing <a href="https://iiif.io/api/presentation/3.0/">IIIF</a> by dragging and dropping files/folders.
          
          It uses <a href="http://github.com/edsilv/biiif">biiif</a> to read your files/folders and adds them to a peer-to-peer <a href="https://dat.foundation">dat</a> archive.

          This archive can then be used to serve the files from your local machine to <a href="https://beakerbrowser.com">Beaker Browser</a> (a browser that understands the Dat protocol).

          Tools like <a href="https://github.com/pfrazee/dat-gateway">Dat Gateway</a> or <a href="https://gitlab.com/mnemoscene/fusebot">FuseBot</a> (a Slack chat bot) can be used to preserve your Dat archive on a remote "preservation peer", and serve its contents over regular http.
        </main>

        <footer className={"mw5 mw7-ns center pa3 ph5-ns"}>

        </footer>

      </>
    );
  }
}
