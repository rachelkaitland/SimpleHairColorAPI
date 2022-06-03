const express = require('express')
const app = express()
const PORT = 8000

const shades = {

    'Chocolate Brown': {
        'level': 6,
        'gloss': 6.73
    },
    'Marashino Red': {
        'level': 8,
        'gloss': 8.66
    },
    'unknown': {
        'level': 0,
        'gloss': 0
    }
}

app.get('/', (request, response) => {
   response.sendFile(__dirname + '/index.html') 
} )

app.get('/api/:color', (request, response) => {
    const hairColor = request.params.color.toLowerCase()
    if(shades[hairColor]) {
    response.json(shades[hairColor])
    }else{
        response.json(shades['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})
