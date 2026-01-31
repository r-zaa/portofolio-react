import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("UI Crash:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#020617",
          color: "#38bdf8",
          textAlign: "center"
        }}>
          <div>
            <h2>⚠️ UI Fallback Active</h2>
            <p>Something failed gracefully.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
