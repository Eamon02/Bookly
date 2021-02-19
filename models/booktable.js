module.exports = (sequelize, DataTypes) => {
    const booktable = sequelize.define("booktable", {
      // Giving the Book Table model a name of type STRING
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
     author: {
       allowNull: false,
       type: DataTypes.STRING
     },
     userRating:{
       allowNull: true,
       type:DataTypes.STRING
     },
     readingStatus: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    });
  
    // booktable.associate = (models) => {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   booktable.belongsTo(models.author, {
    //     onDelete: "cascade",
    //   });
    // };
    
 
    booktable.sync();
  
    return booktable;
  };

  