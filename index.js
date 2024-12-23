const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const quizQuestions = require('./model/quizSchema.js')

const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect('mongodb://localhost:27017/quizdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))


app.get('/quiz', async (req, res) => {
    try{
        const quizzes = await quizQuestions.find()
        res.json(quizzes)
    } catch (error) {
        console.log('Error fetching quiz...', error);
        
        res.status(500).json({ message: 'Error fetching Quiz', error})
    }
})  


app.listen(5000, () => {
    console.log('Server is running on 5000 ');
    
})

