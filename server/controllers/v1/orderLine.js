const { orderLines } = require("../../models");

const getAllOrderlines = async (req, res) => {
  const list = await orderLines.findAll();
  res.json(list);
};

const getbyID = async (req, res) => {
  const orderline = await orderLines.findByPk(req.params.id);
  res.json(orderline);
};

const order = async (req, res) => {
  const line = await orderLines.create({
    customerId: req.body.customerId,
    bookId: req.body.bookId,
  });
  res.json(line);
};

const deleteOrders = async (req, res) => {
  const orders = await orderLines.destroy({
    where: { id: req.params.id },
  });
  res.json(orders);
};

module.exports = {
  getAllOrderlines,
  getbyID,
  order,
  deleteOrders,
};
