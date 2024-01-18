const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, 'Public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/api', (req, res, next) =>{
    try{
        const currentDate  = Date.now();
        const currentDateObject = new Date(currentDate);
        const UTCdateString = currentDateObject.toUTCString();
        return res.status(200).json({
            unix: currentDate,
            utc: UTCdateString
        });
    } catch(e){
        next(new Error("Unexpected Error from Server"));
    }
});

app.get('/api/:date', (req, res, next) => {

    function containsOnlyNumbers(inputString) {
        // Use a regular expression to test if the string contains only numbers
        return /^\d+$/.test(inputString);
    }

    try{
        const {date} = req.params;
        if(containsOnlyNumbers(date)){
            const dateObject = new Date(parseInt(date));
            res.status(200).json({
                unix: dateObject.getTime(),
                utc: dateObject.toUTCString()
            })
        } else{
            
            const dateObject = new Date(date);
            
            if(isNaN(dateObject.getTime())){
                return res.status(400).json({error: 'Invalid Date'});
            }
            res.status(200).json({
                unix: dateObject.getTime(),
                utc: dateObject.toUTCString()
            });
        }

    }catch(e){
        next(new Error("Unexpected Error from Server"));
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});