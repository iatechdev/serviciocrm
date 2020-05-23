/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const autAccounts = sequelize.define('autAccounts', {
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
		phone_fax: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'phone_fax'
		},
		phone_office: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'phone_office'
		},
		phone_alternate: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'phone_alternate'
		},
		billing_address_street: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'billing_address_street'
		},
		billing_address_city: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'billing_address_city'
		},
		shipping_address_street: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'shipping_address_street'
		},
		shipping_address_city: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'shipping_address_city'
		}	

		
	}, {
		tableName: 'accounts'
	});

	autAccounts.associate = function (models) {
		autAccounts.hasMany(models.autAccounts_cstm, {
			foreignKey: 'id_c',
			as: 'autAccounts_cstm'
		});
	}
	autAccounts.associate = function (models) {
		autAccounts.hasMany(models.aosQuotes, {
			foreignKey: 'billing_account_id',
			as: 'aosQuotes'
		});
	}

	
	/*
	authUsers.associate = function (models) {
		authUsers.belongsTo(models.authDeps, {
			foreignKey: 'id_dep',
			as: 'authDeps'
		});
	} */



	return autAccounts;
};
