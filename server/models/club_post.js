const Sequelize = require("sequelize");

module.exports = class ClubPost extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        category: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        limited_content: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        set_top: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        visit_count: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "ClubPost",
        tableName: "club_posts",
        timestamp: true,
        underscored: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      }
    );
  }

  static associate(db) {
    // ClubPost - User (n:1)
    db.ClubPost.belongsTo(db.User, {
      foreignKey: "writer_id",
      targetKey: "id",
    });

    // ClubPost - ClubInfo (n:1)
    db.ClubPost.belongsTo(db.ClubInfo, {
      foreignKey: "club_id",
      targetKey: "id",
    });

    // ClubPost - thumb - User (n:m)
    db.ClubPost.belongsToMany(db.User, { through: db.Thumb });

    // ClubPost - ClubPostComment (1:n)
    db.ClubPost.hasMany(db.ClubPostComment, {
      foreignKey: "post_id",
      sourceKey: "id",
    });

    // ClubPost - ClubPostFile (1:n)
    db.ClubPost.hasMany(db.ClubPostFile, {
      foreignKey: "post_id",
      sourceKey: "id",
    });
  }
};
