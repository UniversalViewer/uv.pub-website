import React from "react";
import Head from "../components/head";
import { Component } from "react";
import YouTube from "../components/youtube";
import GithubRibbon from "../components/github-ribbon";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "UV.pub",
      repo: "UniversalViewer/uv.pub",
      strapline: "Your content 📦 Your rules! 📋",
      video: "https://www.youtube.com/embed/e_PXtXKiz68",
      whatisit: {
        title: "🙋 What is it?",
        text: "<p>\
          What if it were possible to publish and share your images, videos, sounds, pdfs, and 3D objects without having to use a separate website to view each content type?\
        </p>\
        <p>\
          UV.pub (part of the <a href='http://universalviewer.io'>Universal Viewer</a> project) is a drag-and-drop desktop tool for just this!\
        </p>\
        <p>\
          Built on open source and <a href='https://iiif.io/api/presentation/3.0/'>standardised</a> technologies developed by the Galleries, Libraries, Archives, and Museums (GLAM) sector, UV.pub frees you from vendor lock-in and proprietary formats.\
        </p>"
      },
      howdoesitwork: {
        title: "🤓 How does it work?",
        text: "<p>\
          <a href='http://github.com/UniversalViewer/uv.pub'>UV.pub</a> uses <a href='http://github.com/edsilv/biiif'>biiif</a> to read your files/folders, converts them to the <a href='https://iiif.io/api/presentation/3.0/'>IIIF</a> format, then adds them to a peer-to-peer <a href='https://dat.foundation'>dat</a> archive.\
        </p>\
        <p>\
          This archive can then be used to serve the files from your local machine to <a href='https://beakerbrowser.com'>Beaker Browser</a> (a browser that understands the dat protocol).\
        </p>\
        <p>\
          Tools like <a href='https://github.com/pfrazee/dat-gateway'>Dat Gateway</a> or <a href='https://gitlab.com/mnemoscene/fusebot'>FuseBot</a> (a Slack chat bot) can be used to store that dat archive on your own server, and make its contents available over regular http (no special browsers or browser plugins required!).\
        </p>\
        <p>\
          Because it uses dat, you can safely store many copies of your data without worrying about them getting out of sync. Set up your own Universal Viewer instance anywhere you like to view the contents of your archive!\
        </p>"
      },
      footer: {
        contact: "📞 Contact us to find out more!"
      }
    };
  }

  render() {
    return (
      <>
        <Head gaid={"UA-47890586-4"} title={this.state.title}></Head>

        <GithubRibbon repo={this.state.repo} />

        <header className={"mw7 mw8-ns center pa3 ph5-ns"}>
          <h1 className={"tc"}>{this.state.title}</h1>
          <h2 className={"tc pa3"}>{this.state.strapline}</h2>

          <div>
            <YouTube video={this.state.video}></YouTube>
          </div>
        </header>

        <main className={"mw7 mw8-ns center pa3 ph5-ns"}>
          <h3>{ this.state.whatisit.title }</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.whatisit.text  }}></div>
          <h3>{ this.state.howdoesitwork.title }</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.howdoesitwork.text  }}></div>
        </main>

        <footer className={"mw7 mw8-ns center pa3 ph5-ns"}>
          <p>
            <a href="https://twitter.com/universalviewer">
            { this.state.footer.contact }
            </a>
          </p>
        </footer>
      </>
    );
  }
}
