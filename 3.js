var fs=require('fs');

fs.readFile("test.txt",function(err,data)



{
if (err)
console.log("error")
else
console.log(data.toString());
}


);

fs.appendFile("test.txt","   tomorrow we have react class:",function(err){

    if(err)
      throw err
    else
      console.log("data written to file ");

})
