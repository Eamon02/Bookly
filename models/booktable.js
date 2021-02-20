module.exports = (sequelize, DataTypes) => {
    const booktable = sequelize.define("booktable", {
      // Giving the Book Table model a name of type STRING
    title: {
     allowNull: false,
     type: DataTypes.STRING
     },
     author:{
      allowNull: true,
      type:DataTypes.STRING
    },
     user_rating:{
       allowNull: true,
       type:DataTypes.STRING
     },
     reading_status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    }
    });
  
    return booktable;
  };

  