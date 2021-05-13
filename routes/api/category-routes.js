const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({include: [Product]}).then((category) => {
    res.json(category);
  });
});

//parameterization of the path
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where:{id: req.params.id}, include: [Product]}).then((category) => {
    res.json(category)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(category => res.json(category))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where:{id: req.params.id}} ).then(category => res.json(category))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
