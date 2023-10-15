// 1.  import json server
const jsonserver = require('json-server');

// 2. create a server application using jsonserver
const server = jsonserver.create()

// 3. set up path for db.json file
const router=jsonserver.router('db.json');

// 4. return a middleware used by jsonserver
const middleware =jsonserver.defaults()

// 5. setup a port number(bt default its 3000 but frontend is using it so we use 3001)
const port=process.env.PORT || 3001

// 6. use in server
server.use(middleware)
server.use(router)

// 7. to run the port
server.listen(port,()=>{
    console.log('listening on port'+port);
})