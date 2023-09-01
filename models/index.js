// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Book.belongsTo(Reader, {
  foreignKey: 'reader_id',
});
// Categories have many Products
Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Book.belongsTo(Reader, {
  through: {
    model: Trip,
    unique: false
  },
});
// Tags belongToMany Products (through ProductTag)
Book.belongsTo(Reader, {
  through: {
    model: Trip,
    unique: false
  },
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
