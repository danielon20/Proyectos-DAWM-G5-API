const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticia', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_foto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'foto',
        key: 'id_foto'
      }
    },
    id_seccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'seccion',
        key: 'id_seccion'
      }
    },
    autor: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'noticia',
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
        name: "id_foto",
        using: "BTREE",
        fields: [
          { name: "id_foto" },
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
