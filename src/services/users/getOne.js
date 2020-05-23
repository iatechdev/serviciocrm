import db from '../../database/models/index';

const getOne = async (id) => {
  return await db.autAccounts.findOne({
    where: {
      id : id
    },
    attributes: ['id', 'name', 'phone_fax', 'phone_office', 'phone_alternate', 'billing_address_street', 'shipping_address_street', 'shipping_address_city'],
      include: [{
        model: db.aosQuotes,
        as: 'aosQuotes',
        attributes: ['id', 'name', 'name', 'date_entered', 'description', 'billing_address_street', 'name', 'total_amt', 'total_amt', 'subtotal_amount', 'subtotal_amount_usdollar', 'total_amount', 'terms_c']
      }]
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}