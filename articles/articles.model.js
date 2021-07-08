module.exports = (sequelize, Datatypes) => {
    const Articles = sequelize.define("articles", {
        id: {type: Datatypes.INTEGER, autoIncrement: true, primaryKey: true},
        title: {type: Datatypes.STRING, allowNull: false, },
        category: {type: Datatypes.STRING, allowNull: false,},
        lead: {type: Datatypes.STRING, },
        content: {type: Datatypes.TEXT, allowNull: false,},
        desc: {type: Datatypes.STRING, allowNull: false,},
        thumbnail: {type: Datatypes.STRING },
    });
  
    return Articles;
  };

  /* id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        title: {type: Sequelize.STRING(255), allowNull: false, },
        category: {type: Sequelize.STRING(255), allowNull: false,},
        lead: {type: Sequelize.STRING(255), },
        content: {type: Sequelize.TEXT, allowNull: false,},
        desc: {type: Sequelize.STRING(255), allowNull: false,},
        thumbnail: {type: Sequelize.STRING(255), }, */