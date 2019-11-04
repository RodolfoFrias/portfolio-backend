const Project = require('../models/project');

function Errors(err, status){
    const error = new Error(err);
    error.statusCode = status;
    throw error;
}

exports.getProjects = (req, res) => {
    res.status(200).json(
        [
            {
                "_id":"1",
                "title": "Messenger-like",
                "imageUrl":"https://rodolfofrias.s3.us-east-2.amazonaws.com/imageProjects/messenger-like.png",
                "projectUrl":"https://chat-sockets-app.herokuapp.com/",
                "content": `This project was made by me, it is just a chat that works with socket io,
                            on front-end development i used just a ejs engine template, on backend is 
                            nodejs , using express js to handle routes and requests moreover for database
                            is MongoDb which is provided by Atlas.`
            },
            {
                "_id":"2",
                "title": "Stuff",
                "imageUrl":"https://rodolfofrias.s3.us-east-2.amazonaws.com/imageProjects/messenger-like.png",
                "projectUrl":"https://chat-sockets-app.herokuapp.com/",
                "content": `This project was made by me, it is just a chat that works with socket io,
                            on front-end development i used just a ejs engine template, on backend is 
                            nodejs , using express js to handle routes and requests moreover for database
                            is MongoDb which is provided by Atlas.`
            },
            {
                "_id":"3",
                "title": "Another stuff",
                "imageUrl":"https://rodolfofrias.s3.us-east-2.amazonaws.com/imageProjects/messenger-like.png",
                "projectUrl":"https://chat-sockets-app.herokuapp.com/",
                "content": `This project was made by me, it is just a chat that works with socket io,
                            on front-end development i used just a ejs engine template, on backend is 
                            nodejs , using express js to handle routes and requests moreover for database
                            is MongoDb which is provided by Atlas.`
            },
            {
                "_id":"3",
                "title": "Another stuff",
                "imageUrl":"https://rodolfofrias.s3.us-east-2.amazonaws.com/imageProjects/messenger-like.png",
                "projectUrl":"https://chat-sockets-app.herokuapp.com/",
                "content": `This project was made by me, it is just a chat that works with socket io,
                            on front-end development i used just a ejs engine template, on backend is 
                            nodejs , using express js to handle routes and requests moreover for database
                            is MongoDb which is provided by Atlas.`
            }
        ]
    )
};