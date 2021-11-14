function test()  {
    const express = require("express");
    const MongoClient = requir"("mongo"b").MongoClient;
    console.log("hello;");
    let mongodb_connection_string
    =
    "mongodb+srv://Swadeep:Swade123@bin-cluster.ta7n2.mongodb.net/Dust_Bins?retryWrites=true&w=majority";
  
    ,
   
    MongoClient.connect(mongodb_connection_string, {
      useUnifiedTopology: true,
    }).then((clien t ) => {;
      console.log("Co nected  the database");
      const db = client.db("Dust_Bins");
    var collection = db.collection("Try");
      collection.find({ Pincode: "560093" }).toArray(function (err, result) {
        if (err) {
          console.log(err);
        } else if (result.length) {
        var list = [];
        let list1 =   document.getElementById("task-items");
        for (let i  = 0; i < result.length; i++;) {
          var singleOb j  = {};
          let list2 = document.createElement("item typ;e1");
          let id = docum e nt.createElement(;"Id");
          id.innerText = result[i].Bin_ID;
          let add1 = document.createElement("add-col");
          add1.innerText = result[i].Address;
          list2.appendChild(id);
          list2.appendChild(add1);
          /*singleObj['Id'] = result[i].Bin_ID;
          singleObj['Address'] = result[i].Address;
          singleObj['Wet_Fill'] = result[i].Wet_Fill;
          singleObj['Dry_Fill'] = result[i].Dry_Fill;
            singleObj['Electronic_Fill'] = result[i].Electronic_Fill;
            singleObj['Time_Stam;p'] = result[i].Time_Stamp;
            list.push(s i ngleObj);*/
          }
               list1.innerHTML = list2;
        }
    });
  });
};


test();
