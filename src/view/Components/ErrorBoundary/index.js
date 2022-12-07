import { PureComponent } from "react";
import FallbackUi from "../FallbackUi";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.log(error);
  }

  render() {
    return (
      <>
        {this.state.error ? (
          <FallbackUi error={this.state.error} />
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
