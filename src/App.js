import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartsDashboard from "./pages/CartsDashboard";
import Order from "./pages/Order";
const App = () => {
  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="my-cart" element={<CartsDashboard />} />
          <Route path="order" element={<Order />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
