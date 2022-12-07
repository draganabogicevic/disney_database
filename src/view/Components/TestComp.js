import React from "react";

class TestComp extends React.Component {
  render() {
    throw new Error("I am an error");
    return null;
  }
}

export default TestComp;
