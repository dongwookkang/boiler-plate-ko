const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const {User} = require("./models/User");
const config =require('./config/key');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dongwook:1234qwer@boilerplate.jagzo.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!새복많이 받으세요!!!!'))

app.post('/register', (req, res)=>{
    //회원가입할때 정보들을 client 에서 가져오면 
    // 그것들을 데이터 베이스에 넣어준다.
  
    const user =new User(req.body)
    user.save((err,doc)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))