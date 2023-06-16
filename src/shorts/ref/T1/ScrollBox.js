import { Component } from "react";

class ScrollBox extends Component {
  scrollToTop = () => {
    this.box.scrollTop = 0;
  };
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          height: "300px",
          width: "300px",
          overflow: "auto",
          position: "relative",
        }}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div
          style={{
            width: "100%",
            height: "600px",
            background: "linear-gradient(white, black)",
          }}
        />
      </div>
    );
  }
}

export default ScrollBox;
