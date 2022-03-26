import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import QnA from "./components/QnA";

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <hr />
      <QnA />
      <Footer/>
    </div>
  );
}

export default App;
