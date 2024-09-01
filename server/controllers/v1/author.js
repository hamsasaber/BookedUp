const { authors } = require("../../models");

const getAllAuthors = async (req, res) => {
  const authorList = await authors.findAll();
  res.json(authorList);
};
const authorByID = async (req, res) => {
  const author = await authors.findByPk(req.params.id);
  res.json(author);
};

const CreateAuthor = async (req, res) => {
  const newAuthor = await authors.create({
    profilePicture: req.files["profilePicture"]
      ? req.files["profilePicture"][0].path
      : "",
    authorName: req.body.authorName ?? "new Author",
    authorEmail: req.body.authorEmail ?? "newAuthor@gmail.com",
  });
  res.json(newAuthor);
};

const EditAuthor = async (req, res) => {
  const author = await authors.update(
    {
      profilePicture: req.files["profilePicture"]
        ? req.files["profilePicture"][0].path
        : "",
      authorName: req.body.authorName,
      authorEmail: req.body.authorEmail,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.json(author);
};

const RemoveAuthor = async (req, res) => {
  const removeauthor = await authors.destroy({
    where: { id: req.params.id },
  });
  res.json(removeauthor);
};

module.exports = {
  getAllAuthors,
  authorByID,
  CreateAuthor,
  EditAuthor,
  RemoveAuthor,
};
