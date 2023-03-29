module.exports = (sequelize, DataTypes) => {

    const Docs = sequelize.define("Docs", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_link: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Docs;
};