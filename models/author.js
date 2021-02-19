module.exports = (sequelize, DataTypes) => {

    const author = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
      author: {
        allowNull: false,
        type: DataTypes.STRING},
      bio: DataTypes.STRING,
    });
  
    author.associate = (models) => {
      
      // Associating Author with bookTable
      // When an Author is deleted, also delete any associated Posts & add new authors to table
      author.hasMany(models.BookTable, {
        onDelete: "cascade",
        // onUpdate: "cascade",
      });
    };
  
    return author;
  };
  
  