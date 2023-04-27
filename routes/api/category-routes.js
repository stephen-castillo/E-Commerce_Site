const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const categories = await Category.findAll({
            include: [Product],
        });
        res.status(200).json(categories);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        // find the category by its id and include its associated products
        // be sure to include its associated Products
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product }]
        });
        if (!categoryData) {
            res.status(400).json({ message: 'No category found with this id' });
            return;
        }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
    
});

router.post('/', async (req, res) => {
    // create a new category
    try{
        const categoryData = await Category.create(req.body);
        res.status(201).json(categoryData);
    }catch(err){
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    //find the category by it's id
    try{
        const categoryData = await Category.findByPk(req.params.id);
        if(!categoryData){
            res.status(400).json({message: 'No category found with this id'});
            return;
        }
        // update a category by its `id` value
        const updatedCategoryData = await categoryData.update(req.body);
        res.status(200).json(updatedCategoryData);
    }catch(err){
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      // Delete the category with the matching ID
      const deleted = await Category.destroy({ where: { id: req.params.id } });
  
      // If the category is not found, send a 404 status with a custom message
      // Otherwise, return the deleted data
      !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
    } // If there is an error, send a 500 status with the error
    catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
