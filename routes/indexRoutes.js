const router = require("express").Router();
// router.get('/',function(req,res){
//     res.render('index');
// });

// router.get('/make-login/:version',function(req,res){
//     // res.render('index');
//     var data = req.params;
//     res.send(data);
//     // var queryData = req.query;
//     // res.send({data,queryData});
// });

// router.post("/make-login",function(req,res){
//     var data = req.body;
//     res.send(data);
// });

var studentData = [];

// router.get('/make-login/:sname/:smno',function(req,res){
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

    // router.get("/save-new-student",function(req,res){
    //     var data=req.body;
    //     studentData.push(data);
    //     res.send({status:true,result:data});
    // });

    module.exports=router;