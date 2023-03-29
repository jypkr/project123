const axios = require('axios');
const cheerio = require('cheerio');
const request = require('request');
const nodemailer = require('nodemailer');

require('dotenv').config();

function sendEmail(title, author, post_link) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wooyul1316@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: 'wooyul1316@gmail.com',
        to: 'wooyul1316@gmail.com',
        subject: 'New Cron Post',
        html: `<h2>Title: ${title}</h2><p>Author: ${author}</p><p><a href="${post_link}">Read the post</a></p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully: ' + info.response);
        }
    });
}

async function checkForNewPosts() {
    const url = 'https://medium.com/tag/programming';
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    $("article").each(async function (i, article) {
        // need to add post_link
        const title = $(article).find('h2').text();
        const author = $(article).find('div.ab.q p.bd.b.be.z.ff.jo.fg.fh.fi.fj.dh.fk.bi').text();
        const author_link = 'https://medium.com' + $(article).find('a.ae.af.ag.ah.ai.aj.ak.al.am.an.ao.ap.aq.ar.as').attr('href');
        const post_link = 'https://medium.com' + $(article).find('div.jv.l a.ae.af.ag.ah.ai.aj.ak.al.am.an.ao.ap.aq.ar.as').attr('href');

        // check if post already exists in database
        const post = await mediumPosts.findOne({ 
            where: { title: title }
        });

        // if post does not exist in database, send email and save post to database
        if (!post) {
            const post = new mediumPosts({
                title, author, author_link, post_link
            });      
            await post.save();

            // send email
            //await sendEmail(title, author, post_link);
        }

    })

    console.log('checkForNewPosts function called');
};

module.exports = { checkForNewPosts };