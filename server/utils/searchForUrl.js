const cheerio = require('cheerio');
const axios = require('axios');

async function searchForUrl() {
    const url = 'https://medium.com/tag/programming';
    const url1 = 'https://medium.com/tag/';
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const titles = [];
    const author = [];
    const links=[];
    const postLinks = [];


    $("article").each(function(i, article) {
        titles.push($(article).find("h2").text());
        author.push($(article).find("p.bd.b.be.z.ff.jo.fg.fh.fi.fj.dh.fk.bi").text());
        links.push(url1+$(article).find("a.ae.af.ag.ah.ai.aj.ak.al.am.an.ao.ap.aq.ar.as").attr('href'));
    })
    
    //console.log(titles);
    //console.log(author);
    console.log(links);
};


module.exports = {searchForUrl};