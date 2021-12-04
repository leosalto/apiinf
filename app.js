const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/about', (req, res) => {
    res.json(

            {
            id: '1',
            nome: 'Zomo: My Strong Red',
            foto: 'https://cdn.zomoofficial.com/wp-content/uploads/2020/02/ZOMO_2019_PY_50G_STRONG_RED.jpg',
            }
)
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})
