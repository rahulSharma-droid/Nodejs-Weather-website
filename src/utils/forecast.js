const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/983f58b1cf2af933931911508c386a2a/'+latitude+','+longitude+'?unit=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + ( body.currently.temperature - 32 )/1.8 + ' degress out. This high today is ' + ( body.daily.data[0].temperatureHigh  - 32 )/1.8 + ' with a low of ' + ( body.daily.data[0].temperatureLow  - 32 )/1.8 + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
