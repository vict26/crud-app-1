module.exports = (sequelize, Sequelize) => {
    const Creator = sequelize.define("creator", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });
    return Creator;
};