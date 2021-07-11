const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        category_no: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        limited_content: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING('long'),
          allowNull: true,
        },
        set_top: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        visit_count: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        edited_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      }, {
        sequelize,
        timestamp: false,
        modelName: "Club_post",
        tableName: "club_posts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
};