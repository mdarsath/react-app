let mong = require('mongoose')
let schema = mong.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    }
})

module.exports=mong.model("persons",schema)










// let mongo = require('mongoose');
// let schematic = mongo.Schema({
//     Name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     Age:{
//         type:Number,
//         required:true
//     },
//     City:{
//         type:String,
//         required:true
//     },
//     Date:{
//         type:Date,
//         default:Date.now
//     }

    
// })

// module.exports= mongo.model('persons',schematic)