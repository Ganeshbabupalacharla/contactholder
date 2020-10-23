const express=require('express');
const router=express.Router();


//@route    GET api/contacts
//@desc     Get all user contacts
//@access   private
router.get('/',(req,res)=>{
  res.send('get all contacts');
});

//@route    Post api/contacts
//@desc     add new contact
//@access   private
router.post('/',(req,res)=>{
  res.send('add new ');
});


//@route    PUT api/contacts
//@desc     update contact
//@access   private
router.put('/:id',(req,res)=>{
  res.send('update contact');
});

//@route    DELETE api/contacts
//@desc     Get all user contacts
//@access   private
router.delete('/:id',(req,res)=>{
  res.send('delete contact');
});
module.exports=router;