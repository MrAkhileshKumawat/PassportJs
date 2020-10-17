const { Model } = require('objection'); 
const knex = require('../bin/knex'); 
  
// Pass he knex connection to Objection 
Model.knex(knex); 
  
class githubUsers extends Model { 
  static get tableName() { 
    return 'githubUsers'; 
  } 
} 
  
module.exports = githubUsers;