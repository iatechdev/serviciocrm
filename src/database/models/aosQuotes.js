/* jshint indent: 1 */

export default function (sequelize, DataTypes) {
    const aosQuotes = sequelize.define('aosQuotes', {
        id: {
            type: DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'name'
        },
        date_entered: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'date_entered'
        },
        description: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'description'
        },
        billing_address_street: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'billing_address_street'
        },
        total_amt: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'total_amt'
        },
        subtotal_amount: {
                type: DataTypes.STRING(150),
                allowNull: false,
                field: 'subtotal_amount'
            },
        subtotal_amount_usdollar: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'subtotal_amount_usdollar'
        },
        total_amount: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'total_amount'
        },
        terms_c: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'terms_c'
        }

    }, {
        tableName: 'aos_quotes'
    });

   aosQuotes.associate = function (models) {
       aosQuotes.belongsTo(models.autAccounts, {
           foreignKey: 'billing_account_id',
           as: 'autAccounts'
       });
   }
 


    return aosQuotes;
};
