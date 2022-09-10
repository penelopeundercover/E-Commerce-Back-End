const Category = require("./Category");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

Product.belongsTo(Category, {
  through: {
    model: Category,
  },
  as: "",
});

Category.hasMany(Product, {
  through: {
    model: Product,
    //unique: true or false?
  },
  as: "category_id",
});

Product.belongsTo(Category, {
  through: {
    model: Category,
  },
  as: "",
});

Product.hasMany(Tag, {
  through: {
    model: ProductTag,
  },
  as: "product_tag",
});
