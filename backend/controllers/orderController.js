import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc Create new order
//@route POST/api/orders
//@access private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

//@desc Get logged in user orders
//@route GET/api/myorders
//@access private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});
