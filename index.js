const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST Endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            error: "Invalid input format"
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && isNaN(parseInt(item)));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    const response = {
        is_success: true,
        user_id: "utkarsh_rai_03082002", 
        email: "utkarsh.rai2021@vitstudent.ac.in", 
        roll_number: "21BDS0180", 
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response);
});


app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
