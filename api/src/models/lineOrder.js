const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

const lineOrder = sequelize.define('lineOrder', {
  price: {
      type: DataTypes.INTEGER,
  },
  // productId: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  // },
  // orderId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
  }
});
}
