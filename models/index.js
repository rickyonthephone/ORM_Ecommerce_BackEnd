// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  foreignKey: category_id
});
// Categories have many Products
Category.hasMany(Product, {
  foreginKey: category_id
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreginKey: tag_id
  }
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreginKey: tag_id
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};






const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };