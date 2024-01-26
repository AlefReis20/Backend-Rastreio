const express = require("express")
const port = 3000

const app = express()

app.get('/users/:id', (request, response) => {

    const { name, age } = request.query


    return response.json({name, age})
})


app.listen(port, () => {
    console.log(`🚀 Server is start on port ${port}`)
})