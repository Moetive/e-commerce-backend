const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const db_tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    res.status(200).json(db_tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const db_tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    res.status(200).json(db_tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const db_tagData = await Tag.create(req.body);
    res.status(200).json(db_tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
    const db_tagData = await Tag.destroy({
where: {
  id: req.params
}
 })
 res.status(200).json(db_tagData);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
