const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Hobby = require('../models/hobbiesmodel')
const sendMail = require("../controllers/sendmail")
// Get all the notes
router.get('/fetchallhobby', async (req, res) => {
    const hobby = await Hobby.find();
    res.json(hobby);
})
router.post('/addhobby',

    [body('name', "Name too Short").isLength({ min: 5 }), body('email', "Enter a Valid Mail").isEmail()],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var hobby = await Hobby.find({ email: req.body.email });

        if (hobby.length > 0) {
            res.status(400).send("mail exist");
        }
        else {

            try {
                
               // console.log(req.body);
                const result = await Hobby.create(req.body);
                res.send(result);
            } catch (err) {
                console.error(err);
            }
        }
    })
router.put('/updatehobby/:id', async (req, res) => {
   
        var hobby = await Hobby.find({ _id: req.params.id });
    // res.send(hobby);
        const lhobbies = hobby[0].hobby;
        lhobbies.push(req.body.hobby);
       const change = {
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno,
         hobby: lhobbies
         }
    //res.send(change);
    try {
        const result = await Hobby.findOneAndUpdate(
            { _id: hobby[0]._id },
            { $set: change },
            { returnOriginal: false }
        );

        res.send(result);
    }
    catch (err) {
        console.error(err);
    }
    

})
router.delete("/deletehobby/:id", async (req, res) => {
    // const {title,description,tag} = req.body;
    try {
        const result = await Hobby.deleteOne({ _id: req.params.id });
        res.send(result);
    } catch (err) {
        console.error(err);
    }
})
router.put('/addnewhobby/:id', async (req, res) => {
    //  const { name,email,phno,hobbies } = req.body;
    var hobby = await Hobby.find({ _id: req.params.id });
    // res.send(hobby);
    const lhobbies = hobby[0].hobby;
    lhobbies.push(req.body.hobby);
    const change = {
        hobby: lhobbies
    }
    //res.send(change);
    try {
        const result = await Hobby.findOneAndUpdate(
            { _id: hobby[0]._id },
            { $set: change },
            { returnOriginal: false }
        );

        res.send(result);
    }
    catch (err) {
        console.error(err);
    }

})
router.post('/sendMail', sendMail)
module.exports = router;