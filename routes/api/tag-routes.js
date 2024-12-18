const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products',
        },
      ],
    });
    // be sure to include its associated Product data
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve tags', error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products',
        },
      ],
    });

    if (!tag) {
      return res.status(404).json({ message: 'No tag found with this ID' });
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve tag', error: err.message });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });

    res.status(201).json(newTag);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create tag', error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(
      { tag_name: req.body.tag_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updatedTag[0]) {
      return res.status(404).json({ message: 'No tag found with this ID to update' });
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update tag', error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTag) {
      return res.status(404).json({ message: 'No tag found with this ID to delete' });
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete tag', error: err.message });
  }
});

module.exports = router;