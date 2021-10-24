const express = require("express");
var app = express();
app.set('view engine','pug');
app.set('views','views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const indexRoutes = require('./routes/indexRoutes');
const apiRoutes = require('./routes/apiRoutes');

// app.get('/',function(req,res){
//     res.render('index');
// });

// app.get('/make-login/:version',function(req,res){
//     // res.render('index');
//     var data = req.params;
//     res.send(data);
//     // var queryData = req.query;
//     // res.send({data,queryData});
// });

// app.post("/make-login",function(req,res){
//     var data = req.body;
//     res.send(data);
// });

var studentData = [];

// app.get('/make-login/:sname/:smno',function(req,res){
//         // res.render('index');
//         var data = req.params;
//         studentData.push(data);
//         // res.write(studentData);
//         // res.write(JSON.stringify({
//         //     sname:req.params.sname,
//         //     smno:req.params.smno
//         //   }));
//         res.send(data);
//         // res.write(`${studentData.length} rows affected`);
        
//         console.log(studentData);   
//         console.log(`${studentData.length} rows affected`);
    // });

    // app.get("/save-new-student",function(req,res){
    //     var data=req.body;
    //     studentData.push(data);
    //     res.send({status:true,result:data});
    // });
    app.use("/",indexRoutes);
    app.use("/api",apiRoutes);

app.listen(3500,function(){
    console.log("Server is running on port 3500");
});