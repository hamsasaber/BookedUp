const { orders } = require("../../models");

const getAllOrders = async (req, res) => {
  const allOrders = await orders.findAll();
  res.json(allOrders);
};

const orderByID = async (req, res) => {
  const order = await orders.findByPk(req.params.id);
  res.json(order);
};

const placeOrder = async (req, res) => {
  const newOrder = await orders.create({
    status: req.body.status,
    type: req.body.type ?? 1,
    from: req.body.from,
    to: req.body.to,
    customerId: req.body.customerId,
  });
  res.json(newOrder);
};

const editOrder = async (req, res) => {
  const order = await orders.update(
    {
      status: req.body.status,
      type: req.body.type,
      from: req.body.from,
      to: req.body.to,
      customerId: req.body.customerId,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.json(order);
};

const cancelOrder = async (req, res) => {
  const removeOrder = await orders.destroy({
    where: { id: req.params.id },
  });
  res.json(removeOrder);
};
module.exports = {
  getAllOrders,
  orderByID,
  placeOrder,
  editOrder,
  cancelOrder,
};
