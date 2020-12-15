import "./BasicApp.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const fruits = ["Apple", "Orange", "Grape", "Guava"];
const dataObj = fruits.map((item, i) => ({ id: i, elemt: item }));
function BasicApp() {
  return (
    <div className="App">
      <Header title="Basic App - SPA " />
      <Content data={dataObj} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default BasicApp;
