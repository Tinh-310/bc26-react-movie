import React from "react";
// Thường trong 1 project chỉ chọn 1 trong 2 cách
import { Container } from "./styles";
import styles from "./App.module.css";

function App() {
  // return <div className={styles.container}>App</div>;

  return <Container>App</Container>;
}

export default App;
