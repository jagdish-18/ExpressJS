const product = require("../product.json");

exports.addNewProduct = (req, res) => {
  //   console.log(req.body);
  product.push(req.body);
  res.json({ product: req.body, message: `Product Added success` });
};

exports.getAllProducts = (req, res) => {
  // console.log(product);
  res.json(product);
};

exports.getProduct = (req, res) => {
  let id = +req.params.id;
  let item = product.find((product) => product.id === id);
  res.json(item);
};

exports.replaceProduct = (req, res) => {
  let id = +req.params.id;
  // console.log(id);
  let productIndex = product.findIndex((product) => product.id === id);
  // console.log(productIndex);
  product.splice(productIndex, 1, { ...req.body });
  res.json({ message: "Product Replace Success" });
};

exports.updateProduct = (req, res) => {
  let id = +req.params.id;
  let productIndex = product.findIndex((product) => product.id === id);
  // console.log(productIndex);
  const products = product[productIndex];
  // console.log(products);
  product.splice(productIndex, 1, { ...products, ...req.body });
  res.json({ message: `Product Updated SuccessFully` });
};

exports.deleteProduct = (req, res) => {
  let id = +req.params.id;
  // console.log(id);
  let productIndex = product.findIndex((product) => product.id === id);
  // console.log(productIndex);
  const products = product[productIndex];
  // console.log(products);
  product.splice(productIndex, 1);
  res.json({ products, message: "Product Delete Success" });
};
