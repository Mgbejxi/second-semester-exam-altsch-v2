class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  resetErrorBoundary() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong!</h1>
          <button onClick={this.resetErrorBoundary}>Reset</button>
        </div>
      );
    }

    return this.props.children;
  }
}