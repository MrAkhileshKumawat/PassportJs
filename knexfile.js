// Update with your config settings.

// const {DB_HOST,DB_NAME,DB_PASS,DB_USER}=process.env

module.exports = {

  development: {
    client: 'mysql',
    // connection:{
    //   host:DB_HOST,
    //   user:DB_USER,
    //   password:DB_PASS,
    //   database:DB_NAME
    // },
    connection:"mysql://root:Akki@1234@localhost:3306/Blog_App",
    migrations:{
      directory:__dirname+"/lib/migrations"
    }
  },

 
  
};
