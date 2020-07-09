const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=805308cf562392412b4ed958fc5acd87&query=40,75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

    response.on('error', (err) => {
        console.log('An error', err)
    })
})

request.end()
