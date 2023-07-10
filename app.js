const app = require('express')();
const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

