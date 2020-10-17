// Task Model
const { Model } = require('objection'); 
const knex = require('../bin/knex'); 
  
// Pass he knex connection to Objection 
Model.knex(knex); 
  
class googleUsers extends Model { 
  // Tells objection what the db  
  // table is for the model 
  static get tableName() { 
    return 'googleUsers'; 
  } 
} 
  
module.exports = googleUsers;