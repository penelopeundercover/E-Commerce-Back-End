const Category = require("./Category");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: "product_id",
  },
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: "tag_id",
  },
});

module.exports = { Category, Product, ProductTag, Tag };
