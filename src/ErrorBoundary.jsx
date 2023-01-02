import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // you would log this to something like TrackJS or NewRelic
    console.error("error boundary component caught an error", error, info);
  }

  // if error boundary catches an error then show
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/"> Click here to go back to the home page.</Link>{" "}
        </h2>
      );
    }

    // else return all children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;
