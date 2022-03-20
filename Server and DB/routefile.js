let exp = require('express');
let router= exp.Router();
let mongoose = require('mongoose');
let db = require('./schema');





//create
router.post('/',async function(req,res){
    let create = await new db({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City,
    })
    let save = create.save();
    res.json(save)
    console.log(save)
})

//read

router.get('/',async function(req,res){
  let data = await db.find()
  res.json(data)
  
})

//Update
router.put('/',async function(req,res){
    let data = await db.updateOne({_id:req.body._id},{$set:{   
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City,
    }})

    res.json(data)
})


//Delete
router.delete('/:id',async function(req,res){
let dom = await db.findByIdAndDelete(req.params.id)
res.json(dom)
})
// router.delete('/:id',async function(req,res){
    //     let dom = await person.findByIdAndDelete(req.params.id)
    //     res.json(dom)
    // })

module.exports = router
// const { json } = require('express');
// let exp = require('express')
// let router = exp.Router();
// let person=require('./schema')



// router.get('/',function(req,res){
//     res.json("i am a router file")
// })

// router.post('/',async (req,res)=>{
// let dom = await new person({
//     Name:req.body.Name,
//     Age:req.body.Age,
//     City:req.body.City,
// })
// let save =await dom.save();
// res.json(save)
// })




// router.get('/a',async function(req,res){
//     let data = await person.find();
//     res.json(data)
// })



// router.get('/:id',async function(req,res){
//     let data = await person.findById(req.params.id);
//     res.json(data)
// })


// router.put('/update',async function(req,res){
//     let data = await person.updateOne({_id:req.body._id},{$set:{Name:req.body.Name,Age:req.body.Age,City:req.body.City}});
//     res.json(data)
// })


// router.delete('/:id',async function(req,res){
//     let dom = await person.findByIdAndDelete(req.params.id)
//     res.json(dom)
// })
// module.exports=router