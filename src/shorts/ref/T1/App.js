import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToTop()}>
          Scroll To Top
        </button>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          Scroll To Bottom
        </button>
      </div>
    );
  }
}

export default App;
