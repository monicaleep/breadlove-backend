require('dotenv').config();
const db = require('./models');
const express = require('express');
const app = express();
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json()) //parse requests of content type application/json
app.use(bodyParser.urlencoded({ extended: true })) // parse request of content type = application/x-www-form-urlencoded











// Index route - render the home page
app.get('/',(req,res)=>{
    res.send({data: 'hi'})
})

require('./routes/auth.routes')(app)
require('./routes/profile.routes')(app)
require('./routes/bread.routes')(app)
// catchall 404 page


// Start the app
const port = process.env.PORT || 3000
app.listen(port,()=>{
  console.log(`listening on port ${port}`)

})
