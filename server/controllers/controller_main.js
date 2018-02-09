// Axios Import
const axios = require('axios');

// Methods
const create    = (req, res, next) => {
    const db = req.app.get('db');
    const { name, price } = req.body;
    const { id } = req.params;

    db.create_bin([id, name, price])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err));
    console.log('Create Request Completed!');
};

const readShelf = (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.read_shelf([id+'%'])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err));
    console.log('Read Shelf Request Completed!');
};

const readBin   = (req, res, next) => {
    const db = req.app.get('db');

    db.read_bin([req.params.id])
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err));
    console.log('Read Bin Request Completed!');
};

const update    = (req, res, next) => {
    const db = req.app.get('db');
    const { name, price } = req.body;
    const { id } = req.params;

    db.update_bin([id, name, price])
        .then(() => res.status(200).send())
        .catch(err => console.log(err));
    
    console.log('Update Request Completed!');
};

const destroy   = (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_bin([id])
        .then(() => res.status(200).send())
        .catch(err => console.log(err));

    console.log('Delete Request Completed!');
};

module.exports = {
    create,
    readShelf,
    readBin,
    update,
    destroy,
}