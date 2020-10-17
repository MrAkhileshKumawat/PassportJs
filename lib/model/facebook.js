const { Model } = require('objection'); 
const knex = require('../bin/knex'); 
  
// Pass he knex connection to Objection 
Model.knex(knex); 
  
class facebookUsers extends Model { 
  // Tells objection what the db  
  // table is for the model 
  static get tableName() { 
    return 'facebookUsers'; 
  } 
} 
  
module.exports = facebookUsers;