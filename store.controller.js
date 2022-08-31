
const conn = require('./connectdb')
const request = require('tedious').Request;

let executeQuery = function (sql) {
    let result = [];
    req = new request(sql, (err, rowCount, rows) =>{
        if(err){
            console.log(err);
        }else{
            var jsonArray = []
            rows.forEach((columns)=>{
                var rowObj = {};
                columns.forEach((column)=>{
                    rowObj[column.metadata.colName] = column.value
                })
                console.log(rowObj)
                jsonArray.push(rowObj)
            })
            // res.json(jsonArray)
            // console.log(jsonArray)
        }
    })



    conn.execSql(req)


}

let getAllProduct = function () {
    let sql = "SELECT * FROM PRODUCTS;";

    conn.on('connect', function (err) {
        if (err) {
            console.log('Error: ', err)
        }
        executeQuery(sql)

    });
    conn.connect();
};


getAllProduct();
