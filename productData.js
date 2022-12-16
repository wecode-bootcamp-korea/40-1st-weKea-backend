// require("dotenv").config();

// const { DataSource } = require("typeorm");
// const dotenv = require('dotenv')
// const fs = require("fs");
// const path = require("path");

// // const FILE_NAME = "wekea_product_data.csv";
// // const csvPath = path.join(__dirname, '..', FILE_NAME);
// const csv = fs.readFileSync('./wekea_product_data.csv', "utf-8");

// const appDataSource = new DataSource({
//   type: process.env.TYPEORM_CONNECTION,
//   host: process.env.TYPEORM_HOST,
//   port: process.env.TYPEORM_PORT,
//   username: process.env.TYPEORM_USERNAME,
//   password: process.env.TYPEORM_PASSWORD,
//   database: process.env.TYPEORM_DATABASE,
// });

// // console.log(csv)

// appDataSource
// .initialize()
// .then(() => {
//   const rows =  csv.split("\r\n");
//   // console.log(rows)
//   if(rows[rows.length -1] === ''){
//     rows.pop();
//   }
//   let results = [];
//   let columnTitle = [];
//    for(const i in rows){
//     const row = rows[i]
//     const data = row.split(",")
//     if(i === "0") {
//         columnTitle = data
//     } else {
//       let row_data = {}
//       for(const index in columnTitle) {
//         const title = columnTitle[index]
//         row_data[title] = data[index]
//       }
//       results.push(row_data)
//     }
//   }
//   console.log(results)


// for(const i in results){
//   const result = results[i]
//   let productName = result.name
//   let productKname = result.kName
//   let productPrice = result.price
//   let productCode = result.productCode
//   let productThumbnail = result.thumbnailUrl
//   let productExImage = result.exampleImageUrl
//   let description = result.description
//   let rating = result.rating
//   let stock = result.stock
//   let categoryId = result.categoryId
//   let createdAt = result.createdAt
    
//   appDataSource
//     .query(
//       `
//       INSERT INTO products (
//         name,
//         kName,
//         price,
//         productCode,
//         thumbnailUrl,
//         exampleImageUrl,
//         description,
//         rating,
//         stock,
//         categoryId,
//         createdAt
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
//       `,
//       [productName, productKname, productPrice, productCode, productThumbnail, productExImage, 
//        description, rating, stock, categoryId, createdAt]
//       )
//       .then(() => console.log('done!'))
// }
//   })
//   .catch(() => {
//     console.log("Error: Data Source initialization has been failed");
// });