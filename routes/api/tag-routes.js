const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// Find all tags
// Be sure to include its associated Product data
router.get("/", (req, res) => {});

//Find a single tag by its `id`
//Be sure to include its associated Product data
router.get("/:id", (req, res) => {});

// Create a new tag
router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
