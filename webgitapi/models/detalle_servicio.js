const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle_servicio', {
    id_detalle: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'servicio',
        key: 'id'
      }
    },
    descripcion: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'detalle_servicio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detalle" },
          { name: "id_servicio" },
        ]
      },
      {
        name: "id_servicio",
        using: "BTREE",
        fields: [
          { name: "id_servicio" },
        ]
      },
    ]
  });
};
