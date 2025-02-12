const mongodb = require("../database/connect");
const { ObjectId } = require('mongodb');
// const { validationResult } = require('express-validator');

// Get all quotes
const getAllData = async (req, res) => {
    try {
        const response = await mongodb.getDb().db().collection('users').find();
        response.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).json({ message: 'An error occurred while fetching quotes.' });
    }
};

// Get a single quote by ID
const getSingleData = async (req, res) => {
    const quoteId = req.params.id;

    if (!ObjectId.isValid(quoteId)) {
        return res.status(400).json({ message: 'Invalid quote ID format.' });
    }

    try {
        const response = await mongodb.getDb().db().collection('users').findOne({ _id: new ObjectId(quoteId) });

        if (!response) {
            return res.status(404).json({ message: 'Quote not found.' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ message: 'An error occurred while fetching the quote.' });
    }
};

module.exports = { getAllData, getSingleData };
