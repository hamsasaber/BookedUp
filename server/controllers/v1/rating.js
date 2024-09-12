const { ratings, customers, books } = require("../../models");

const getAllRatings = async (req, res) => {
  const allRatings = await ratings.findAll({
    include: [
      {
        model: customers,
      },
      {
        model: books,
      },
    ],
  });
  res.json(allRatings);
};

const Rate = async (req, res) => {
  const rating = await ratings.create({
    rating: req.body.rating,
    customerId: req.body.customerId,
    bookId: req.body.bookId,
  });
  res.json(rating);
};

const editRate = async (req, res) => {
  const editedRate = await ratings.update(
    {
      rating: req.body.rating,
      customerId: req.body.customerId,
      bookId: req.body.bookId,
    },
    { where: { id: req.params.id } }
  );
  res.json(editedRate);
};

module.exports = {
  getAllRatings,
  Rate,
  editRate,
};
