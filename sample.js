  const axios = require('axios');
  const cheerio = require('cheerio');
 const fs = require('fs');
  axios.get('https://t.me/askaou')
     .then((response) => {       
           let $ = cheerio.load(response.data);
      $('.tgme_body_wrap').each((index, element) => {
          var result = $(element).find('.tgme_page_extra').text().trim();
           console.log(result);
    
             $('#subcribe').innerHTML=(result);
            $('#subcribe').innerHTML = result;
             fs.writeFileSync("./subscribe.txt", result);
         });
  })
     .catch((error) => {
         console.log(error);
    })

    // const fetch = require('node-fetch');

    // const getReddit = async () => {
    //     const response = await fetch('https://t.me/askaou');
    //     const body = await response.text();
    //     console.log(body); // prints a chock full of HTML richness
    //     return body;
    // };

  
    // const fetch = require('node-fetch');
    // const cheerio = require('cheerio');
    
    // const getReddit = async () => {
    //   // get html text from reddit
    //   const response = await fetch('https://t.me/askaou');
    //   // using await to ensure that the promise resolves
    //   const body = await response.text();
    
    //   // parse the html text and extract titles
    //   const $ = cheerio.load(body);
    //   const titleList = [];
        
    //   // using CSS selector  
    //   $('.tgme_page_extra').each((i, title) => {
    //     const titleNode = $(title);
    //     const titleText = titleNode.text();
        
    //     titleList.push(titleText);
    //   });
    
    //   console.log(titleList);
    // };
    
    // getReddit();
// fetch('https://t.me/askaou')
// .then(response => response.text())
// .then(html =>{
// let par = new DOMParser();
// let doc= parser.parseFormStrring(html,"text/html");
// let result =doc.querySelector('.tgme_page_extra');
// console.log(result);




// })
