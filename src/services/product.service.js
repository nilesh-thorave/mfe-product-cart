import PRODUCTS from "../mocks/products";

export const getProductById = (proudctId) =>
  PRODUCTS.find((product) => product.id === proudctId);

export const getTotalPrice = (cart) => {
  const total = cart.reduce((acc, curr) => {
    const product = PRODUCTS.find((item) => item.id === curr.productId);
    acc = acc + product.price * curr.quantity;
    return acc;
  }, 0);
  return total;
};
