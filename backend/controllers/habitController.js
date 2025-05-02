const Habit = require('../models/Habit')
const createHabit = async(req,res)=>{
    try{
        const {name,frequency} = req.body;
        const newHabit = new Habit({name,frequency});
        await newHabit.save();
        res.status(201).json(newHabit);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

module.exports = {createHabit};