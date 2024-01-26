const express = require("express")
const port = 3000

const app = express()
app.use(express.json)

app.get('/users/:id', (request, response) => {

    const { id } = request.params


    return response.json({id})

    console.log
})


app.listen(port, () => {
    console.log(`🚀 Server is start on port ${port}`)
})