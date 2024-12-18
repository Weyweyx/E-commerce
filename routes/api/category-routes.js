const router = require('express').Router();
const { request } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  const categories = await Category.findAll({
    include: {
      model:Product,
      as: 'products'
    }
  })
  console.log (categories)
  res.json({
    success:true, data: categories
  })
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  const categories = await Category.findByPk(req.params.id,{
    include: {
      model:Product,
      as: 'products'
    }
  })
  console.log (categories)
  res.json({
    success:true, data: categories
  })
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new category
  const categories = await Category.create({
    category_name: req.body.category_name
  })
  console.log (categories)
  res.json({
    success:true, data: categories
  })
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const categories = await Category.update({
    category_name: req.body.category_name
  },{
    where:{id:req.params.id}
  })
  console.log (categories)
  res.json({
    success:true, data: categories
  })
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  const categories = await Category.destroy(
    {
    where:{id:req.params.id}
  })
  console.log (categories)
  res.json({
    success:true, data: categories
  })
});

module.exports = router;
