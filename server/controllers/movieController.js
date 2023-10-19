const mongoose = require('mongoose');
const Movie = require('../models/Movie');
/**
 * api/movies
 * GET all movies
 */

exports.listmovie = async(req, res) => {
   try {
    let { limit = 10, page = 1, category, q} = req.query;
    const limitRecords = parseInt(limit);
    const skip = (page - 1) * limit;

    let query = {};
   
   if(q){
    query = {$text: {$search: q}}
   }
  if (category) query.category = category;

    const movies = await Movie.find(query).limit(limitRecords).skip(skip);
    res.json({ page: page, limit: limitRecords, movies});
   } catch (error) {
    res.status(404).json({message: error})
   } 
}


/**
 * api/movies
 * POST a single movie
 */

exports.insertSingleMovie = async(req, res) => {
 const newMovie = new Movie ({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
 });

 try {
    await newMovie.save();
    res.json(newMovie);
 } catch (error) {
    res.status(404).json({message: error})
 }

}


/**
 * api/movies/:id
 * PATCH a single movie
 */

exports.updateSingleMovie = async(req, res) => {

    let paramID = req.params.id;

    let name = req.body.name;
    let description = req.body.description;
    let category = req.body.category;
    let thumbnail = req.body.thumbnail;

    try {
        const updateMovie = await Movie.updateOne({ _id: paramID }, {name: name}, {description: description}, {category: category},{thumbnail: thumbnail})
        res.json(updateMovie);
    } catch (error) {
        res.status(404).json({message: error})
    }

}



/**
 * api/movies/:id
 * DELETE a single movie
 */

exports.deleteSingleMovie = async(req, res) => {

    let paramID = req.params.id;


    try {
        const deleteMovie = await Movie.deleteOne({ _id: paramID })
        res.json(deleteMovie);
    } catch (error) {
        res.status(404).json({message: error})
    }

}