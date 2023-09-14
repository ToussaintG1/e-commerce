const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoriesData = await Category.findAll({
    include: [{ 
      model: Product 
    }],
  });
  res.status(200).json(categoriesData);
} catch (err) {
  res.status(500).json(err);
}
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then((category)=>req.json(category))
  .catch((error)=>req.status(500).json(error))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category)=> res.json(category))
  .catch((error)=>res.status(400).json(error))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    where:{
      id:req.params.id
    },
  })
  .then((category)=>res.json(category))
  .catch((error)=> res.status(400).json(error))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id:req.params.id
    },
  })
  .then((category) => res.json(category))
  .catch((error) => res.status(400).json(error))
});

module.exports = router;
