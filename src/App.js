import logo from './logo.svg';
import './App.css';
import Header from './My Components/Header';
import Todos from './My Components/Todos';
import Footer from './My Components/Footer';
function App() {
  let todos=[
    {
      sno: 1,
      src: "./Images/market.jpg",
      title: "Go to the market",
      des: "You have to go the the market"
    },
    {
      sno: 2,
      src: "./Images/drinking-water.jpg",
      title: "Drink Water",
      des: "Please drink water asap!"
    },
  ]
  return (
    <>
      <Header title="Todo List" searchBar={true} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
