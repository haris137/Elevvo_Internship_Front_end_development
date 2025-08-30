import "./App.css";
import Footer from "./pages/footer";
import Home from "./pages/Homepage";
import Pricing from "./pages/pricing";
import Products from "./pages/products";

function App() {
  return <>
      <div className="overflow-hidden">
          <Home />
          <Products />
          <Pricing />
          <Footer />
      </div>
    </>
}

export default App;
