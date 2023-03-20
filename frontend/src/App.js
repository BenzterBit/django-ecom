import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="py-6">
        <Container>
          <HomeScreen/>
          <h1>My app</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
