const sequelize = require("../database");
const Product = require("../models/product");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    for (let i = 0; i < 100; i++) {
      await Product.create({
        title: `Product title ${i + 1}`,
        price: Math.floor(200 * Math.random() * 1000),
        count: Math.floor((i + 1) * Math.random() * 1000),
        description: `Product description is something and something and thats all that is required for you to know.`,
        image: `https://picsum.photos/200?product=${i}`,
      });
    }
    res.status(200).send("Successfully loaded the product details in db");
  } catch (error) {
    await sequelize.close();
    console.error(error);
  }
});

module.exports = router;
