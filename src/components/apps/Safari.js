import React, { useState, Component } from "react";
import Window from "../Window";

class SafariContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goURL: "https://renovamen.ink/",
      currentURL: "https://renovamen.ink/"
    };
  }

  setGoURL = (e) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) this.setState({ goURL: e.target.value });
  };

  render() {
    return (
      <div className="w-full h-full bg-white">
        <div className="h-8 flex justify-center items-center bg-white">
          <input
            type="text"
            value={this.state.currentURL}
            onChange={(e) => this.setState({ currentURL: e.target.value })}
            onKeyPress={this.setGoURL}
            className="h-6 w-4/5 p-2 rounded text-center font-normal text-gray-500 bg-gray-100"
          />
        </div>
        <iframe
          title={"Safari clone browser"}
          src={this.state.goURL}
          frameBorder="0"
          className="h-full w-full"
        />
      </div>
    );
  }
}

export default function Safari({ show, setShow, active, z }) {
  const [safariMax, setSafariMax] = useState(false);
  return (
    <Window
      title="Safari"
      show={show}
      setShow={setShow}
      max={safariMax}
      setMax={setSafariMax}
      active={active}
      z={z}
      size={"h-3/4 w-3/5"}
    >
      <SafariContent />
    </Window>
  );
}
