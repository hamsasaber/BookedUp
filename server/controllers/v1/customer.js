const { customers, users } = require("../../models");

const getAllCustomers = async (req, res) => {
  const allCustomers = await customers.findAll({
    include: [
      {
        model: users,
      },
    ],
  });
  res.json(allCustomers);
};

const customerByID = async (req, res) => {
  const customer = await customers.findByPk(req.params.id);
  res.json(customer);
};

const createCustomer = async (req, res) => {
  const newCustomer = await customers.create({
    cardName: req.body.cardName ?? "no card name",
    cardNumber: req.body.cardNumber ?? "no card number",
    expiryMonth: req.body.expiryMonth ?? "no month",
    expiryYear: req.body.expiryYear ?? "no year",
    profilePicture: req.files["profilePicture"]
      ? req.files["profilePicture"][0].path
      : "",
    userId: req.body.userId,
    cvv: req.body.cvv,
  });
  res.json(newCustomer);
};

const editCustomer = async (req, res) => {
  const customer = await customers.update(
    {
      cardName: req.body.cardName ?? "no card name",
      cardNumber: req.body.cardNumber ?? "no card number",
      expiryMonth: req.body.expiryMonth ?? "no month",
      expiryYear: req.body.expiryYear ?? "no year",
      profilePicture: req.files["profilePicture"]
        ? req.files["profilePicture"][0].path
        : "",
      userId: req.body.userId,
      cvv: req.body.cvv,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.json(customer);
};

const deleteCustomer = async (req, res) => {
  const customer = await customers.destroy({
    where: { id: req.params.id },
  });
  res.json(customer);
};

module.exports = {
  getAllCustomers,
  customerByID,
  createCustomer,
  editCustomer,
  deleteCustomer,
};
