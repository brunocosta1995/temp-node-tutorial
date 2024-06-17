const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((productItem) => {
    const { id, name, image } = productItem;
    return { id, name, image };
  });
  res.json(newProducts);
});

//router Parameters
app.get(`/api/products/:productId`, (req, res) => {
  console.log(req.params.productId);
  const idProd = req.params.productId;
  const product = products.find((product) => product.id === Number(idProd));

  if (!product) {
    console.log(product);
    return res.status(404).send("Product Does Not Exist!");
  }

  return res.json(product);
});

//exemplo router params
app.get("/api/products/:productID/reviews/:reviewDesc", (req, res) => {
  console.log(req.params);
  res.send("ROUTER PARAMS: " + JSON.stringify(req.params));
});

//Qeury Params -> é necessários utilizar simbolos de agregação '?' e '&' - query?name=Bruno&lastName=Costa
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { limit, search } = req.query;
  let searchProducts = [...products];

  if (search) {
    searchProducts = searchProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    searchProducts = searchProducts.slice(0, Number(limit));
  }

  if (searchProducts.length < 1) {
    // res.status(200).send('No products matched the search!');
    //prática usual verificada em servers
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(searchProducts);

  // res.send('QUERY PARAMS: ' + JSON.stringify(req.query));
});

app.listen(5000, () => {
  console.log("Server listen to the port 5000");
});
