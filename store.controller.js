
const conn = require('./connectdb')
const request = require('tedious').Request;

let executeQuery = function(sql) {
    req = new request(sql, (err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }else{
            console.log(rowCount);
        }
    })
    conn.execSql(req)

   
}

let getAllProduct = function() {
    let sql = "SELECT * FROM PRODUCTS;";

    conn.on('connect', function(err) {
        if(err) {
          console.log('Error: ', err)
        }
        executeQuery(sql)

      });
      conn.connect();
};


getAllProduct();