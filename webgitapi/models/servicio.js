const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_servicio',
        key: 'id_tipo'
      }
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    id_seccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'seccion',
        key: 'id_seccion'
      }
    }
  }, {
    sequelize,
    tableName: 'servicio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_tipo",
        using: "BTREE",
        fields: [
          { name: "id_tipo" },
        ]
      },
      {
        name: "id_seccion",
        using: "BTREE",
        fields: [
          { name: "id_seccion" },
        ]
      },
    ]
  });
};
