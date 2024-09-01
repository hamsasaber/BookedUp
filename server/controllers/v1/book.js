const { books } = require("../../models");

const getAllBooks = async (req, res) => {
  const allBooks = await books.findAll();
  res.json(allBooks);
};

const BookbyID = async (req, res) => {
  const book = await books.findByPk(req.params.id);
  res.json(book);
};

const newBook = async (req, res) => {
  const addBook = await books.create({
    title: req.body.title ?? "new Book",
    description: req.body.description ?? "insert Description",
    coverImage: req.files["coverImage"] ? req.files["coverImage"][0].path : "",
    path: req.files["path"] ? req.files["path"][0].path : "",
    nbRead: req.body.nbRead,
    genre: req.body.genre ?? "general",
    salesPrice: req.body.salesPrice,
    rentPrice: req.body.rentPrice,
    publishDate: req.body.publishDate,
    authorId: req.body.authorId,
  });
  res.json(addBook);
};

const editBook = async (req, res) => {
  const editedBook = await books.update(
    {
      title: req.body.title ?? "new Book",
      description: req.body.description ?? "insert Description",
      coverImage: req.files["coverImage"]
        ? req.files["coverImage"][0].path
        : "",
      path: req.files["path"] ? req.files["path"][0].path : "",
      nbRead: req.body.nbRead,
      genre: req.body.genre ?? "general",
      salesPrice: req.body.salesPrice,
      rentPrice: req.body.rentPrice,
      publishDate: req.body.publishDate,
      authorId: req.body.authorId,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.json(editedBook);
};

const removeBook = async (req, res) => {
  const removedbook = await books.destroy({
    where: { id: req.params.id },
  });
  res.json(removedbook);
};

module.exports = {
  getAllBooks,
  BookbyID,
  newBook,
  editBook,
  removeBook,
};
