const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const studentsRoutes = require('./routes/studentsRoutes');

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/students', studentsRoutes);

app.listen(3000, () => {
  console.log('Server is listening');
});
