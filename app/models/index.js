module.exports = (app, mongoose) => {
    require('./schema/User')(app, mongoose)
}