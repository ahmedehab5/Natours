const Tour = require('./../models/tourModel');


exports.getAllTours = async (req, res) => {
    try{
        const queryObject = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach((a) => delete queryObject[a])
       
        let queryString = JSON.stringify(queryObject)
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, a => `$${a}`);


        const query = Tour.find(JSON.parse(queryString))

        const tours = await query;
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        });
    }
    catch(err) {
        res.status(404).json({
            status : 'failed',
            message : err
        })
    }
};

exports.getTour = async (req, res) => {
    try{
        const tour = await Tour.findById(req.params.id)
        res.status(200).json({
            status : 'success',
            data : {
                tour
            }
        })
    }
    catch(err){
        res.status(404).json({
            status : 'failes',
            message : err
        })
    }
};

exports.createTour = async (req, res) => {
    try{
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status : "success",
            data : newTour
        })
    }
    catch(err){
        res.status(400).json({
            status : 'fail',
            message : err
        })
    }
};

exports.updateTour = async (req, res) => {
    try{
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators : true
        })
        res.status(200).json({
            status : 'success',
            data :{
                tour
            }
        })
    }
    catch(err) {
        res.status(404).json({
            status : 'failed',
            message : err
        })
    }
};

exports.deleteTour = async (req, res) => {
    try{
        await Tour.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null
        });
    }
    catch(err) {
        res.status(404).json({
            status : 'failed',
            message : err
        })
    }
};