const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// setup img
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg'|| file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cd(null, false);
    }
}

// To support URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));


const helloRoutes = require('./src/routes/hello');
const userGameRoutes = require('./src/routes/user-game');
const userGameBiodataRoutes = require('./src/routes/user-game-biodata');
const userGameHistoryRoutes = require('./src/routes/user-game-history');


app.use('/', helloRoutes);
app.use('/api/v1/', userGameBiodataRoutes);
app.use('/api/v1/', userGameHistoryRoutes);
app.use('/api/v1/', userGameRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});