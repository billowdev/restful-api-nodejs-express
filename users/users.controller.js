const express = require('express');
const router = express.Router()
const usersService = require('./users.service')

router.get("/:id", async(req,res)=>{
    const user = await usersService.findOne(id)
    return res.json(user)
})
router.get("/", async(req,res)=>{
    const users = await usersService.findAll()
    return res.json(users)
})

router.post("/", async(req, res)=>{
    await usersService.create(req.body).then(()=>{
        res.status(201).json({success:true, msg:"create user successfuly"});
    }).catch(()=>{
        res.status(400).json({success:false, msg:"create user failure"} );
    })
})
router.patch("/:id", async(req,res)=>{
    await usersService.update(id, req.body).then(()=>{
        res.status(200).json({success:true, msg:"update user successfuly"});
    }).catch(()=>{
        res.status(400).json({success:false, msg:"update user failure"})
    })
})

router.delete("/:id", async(req, res)=>{
    await usersService.update(id).then(()=>{
        res.status(200).json({success:true, msg:"delete user successfuly"})
    }).catch(()=>{
        res.status(400).json({success:false, msg:"delete user failure"});
    })
})

module.exports = router