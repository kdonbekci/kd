require('dotenv').config();

const version = process.env.API_VERSION || '1.0'
console.info(`API version: v${version}`)

const routes = (app) => {
    app.use('/api/resume', require(`./api/v${version}/resume`));
    app.use('/api/education', require(`./api/v${version}/education`));
    app.use('/api/projects', require(`./api/v${version}/projects`));
    app.use('/api/user', require(`./api/v${version}/user`));
    app.get('/', (req, res) => {
        res.send('home')
    });
    app.get('*', (req, res) => {
        res.send('invalid endpoint')
    });
};

module.exports = routes;