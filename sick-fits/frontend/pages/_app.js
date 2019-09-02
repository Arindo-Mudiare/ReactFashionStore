import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>Hey i'm on every page</p>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
