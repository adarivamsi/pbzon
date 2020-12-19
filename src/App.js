import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { db } from "./firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      // every time a new post is added fire this code off
      setCartItems(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <div className="App">
          <Header cartItems={cartItems} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
