// back end web application framework for building RESTful APIs with Node.js
const express = require('express');
const app = express();

const commConstants = require('./constant');

// Body-parser is the Node.js body-parsing middleware. 
// It is responsible for parsing the incoming request bodies in a middleware before you handle it.
const bodyParser = require('body-parser'); 

// CORS or Cross-Origin Resource Sharing in Node.js is a mechanism by which a 
// front-end client can make requests for resources to an external back-end server. 
// The single-origin policy does not allow cross-origin requests and CORS headers are required to bypass this feature.
const cors = require('cors');

// Customizing CORS options
// const corsOptions = {
//     origin: 'http://example.com', // Allow only this origin
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// };

app.use(express.json());

// In this project allow alls. otherwise you can use in above corsOption as ---> app.use(cors(corsOption));
app.use(cors());
app.use(bodyParser.json());
// you can use ---> app.use(bodyParser.urlencoded({ extended: false }));
// bodyParser.urlencoded([options]) means Parses incoming requests with URL-encoded payloads.
// extended: When true, uses the qs library to parse the URL-encoded data, allowing for rich objects and arrays. When false, uses the querystring library.
// Also you can use limit: Controls the maximum request body size. Default is '100kb'

const PORT = process.env.Port || 5000;

app.get( '/' , (req, res) => {
    res.send(commConstants.WLCOME_MESSAGE);
});

app.listen(PORT, () => {
    console.log(commConstants.SERVER_RUNNING_MESSAGE, PORT);
});

