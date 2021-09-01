const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('video', {
    id_video: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_seccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'seccion',
        key: 'id_seccion'
      }
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    ruta: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'video',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_video" },
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
