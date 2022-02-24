const data = require('./texts.json')
const textUtils = require('./text-utils')

const express = require('express')
const app = express()

app.use(express.json())

app.post('/text', async (request, response) => {
    const bodyText = request.body.text;
    // const responseArray = await request.body.map(async (a) => ({ "text": await textUtils.fixText(a.text)}));
    // const responsePromisses = await Promise.all(responseArray)
    const responseText = await textUtils.fixText(bodyText)
    // response.send(responsePromisses);
    response.send({ text: responseText })
});

app.listen(3000, () => {
    console.log('App listening on port 3000')
})