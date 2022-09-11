const Category = require("./Category");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

Category.hasMany(Product, {
  through: {
    model: Product,
    foreignKey: "category_id",
    //unique: true or false?
  },
});

Product.belongsTo(Category, {
  through: {
    model: Category,
    foreignKey: "category_id",
  },
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: "product_tag",
  },
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: "product_tag",
  },
});

module.exports = { Category, Product, ProductTag, Tag };
