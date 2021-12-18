import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLoader from "./components/PageLoader";

const CartsDashboardLazy = lazy(() => import("./pages/CartsDashboard"));
const OrderLazy = lazy(() => import("./pages/Order"));

const App = () => {
  return (
    <BrowserRouter>
      <section>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="my-cart" element={<CartsDashboardLazy />} />
            <Route path="order" element={<OrderLazy />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Suspense>
      </section>
    </BrowserRouter>
  );
};

export default App;
