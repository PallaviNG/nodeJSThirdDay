const { nextTick } = require("process");

const router = require("express").Router();

router.get('/',function(req,res){
    res.send({status:true});
});

// router.get("/save-new-student",function(req,res,next){
//     next();
// },function(req,res){
//     res.send({status:true});
// });

var studentList=[];

router.get("/",function(req,res){
    res.send({stauts:true});
});

router.get("/get-student-list",function(req,res){
    res.send({status:true,result:studentList});
});

router.get("/save-new-student",function(req,res,next){
    var data = req.body;
    studentList.push(data);
    res.send({status:true,result:studentList,database:`${studentList.length} rows affected`});
});

module.exports=router;