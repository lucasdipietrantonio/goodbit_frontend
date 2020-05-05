const express = require('express');
const server = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
var Request = require("request");
    server.get('/', function(request, response) {
            getData(request,response);
    });
     server.get('/start-here', function(request, response) {
         getData(request,response);
     });
     server.get('/basics', function(request, response) {
         getData(request,response);
     });
     server.get('/ask-us-anything', function(request, response) {
         getData(request,response);
     });
     server.get('/learn/*', function(request, response) {
         getData(request,response);
     });
     server.get('/invest/*', function(request, response) {
         getData(request,response);
     });
     server.get('/wallets/*', function(request, response) {
         getData(request,response);
     });
     server.get('/about', function(request, response) {
         getData(request,response);
     });
     server.get('/blog', function(request, response) {
         getData(request,response);
     });
     server.get('/license-content', function(request, response) {
         getData(request,response);
     });
     server.get('/privacy-policy', function(request, response) {
         getData(request,response);
     });
     server.get('/terms-of-services', function(request, response) {
         getData(request,response);
     });
     server.get('/blog-detail/*', function(request, response) {
         getBlogData(request,response);
     });
     server.get('/about/about-profile/:id', function(request, response) {
         getAboutData(request,response);
     });
     server.use(express.static(path.resolve(__dirname, './build')));
    server.get('/sitemap.xml', function(request, response) {
        const filePath = path.resolve(__dirname, '/', 'sitemap.xml');
        response.sendFile(filePath);
    });
    server.get('/robots.txt', function(request, responce) {
            const filePath = path.resolve(__dirname, '/', 'robots.txt');
            response.sendFile(filePath);
    });

    server.get('*', function(request, response) {
        getData(request,response);
    });
    server.listen(port, () => console.log(`Listening on port ${port}`));
 function getAboutData(request,response){
    //  request.params
    let page_slug = request.params.id
    // console.log(page_slug);
    let metadata;
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
        return console.log(err);
        }
       Request.post({
            "headers": { "content-type": "application/json" },
            "url": "https://admin.goodbit101.com/api/v1/admin-data",
            "body": JSON.stringify({
                'id':page_slug
            })
        },
        (error, res, body) => {
            if(error) {
                return console.dir(error);
            }
            metadata = JSON.parse(body);
            console.log(metadata);
            if(metadata.results && metadata.results){
                var title = metadata.results.profile.title ? metadata.results.name+" "+metadata.results.profile.title : 'Goodbit101' ;
                var sitename =  'Goodbit101';
                var url =   'https://www.goodbit101.com/about/about-profile/'+page_slug;
                var height = '';
                var width =  '';
                var description =metadata.results.profile.description ? metadata.results.profile.description : 'Goodbit';
                var image = (metadata.results.profile.image) ? metadata.displayUrl+metadata.results.profile.image : 'https://www.goodbit101.com/goodbit-thumbnail.png' ;

                var result = data.replace(/<og-tag\/>/g, `<meta name="title" content="${title}">
                <meta name="description" content="${description}" />
                <meta name="author" content="--">

                <meta itemprop="name" content="${title}">
                <meta itemprop="description" content="${description}">
                <meta itemprop="url" content="${url}">
                <meta itemprop="image" content="${image}">
                <meta itemprop="height" content="${height}">
                <meta itemprop="width" content="${width}">

                <meta property="og:title" content="${title}">
                <meta property="og:description" content="${description}">
                <meta property="og:url" content="${url}">
                <meta property="og:site_name" content="${sitename}">
                <meta property="og:image" content="${image}">
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="${title}">
                <meta name="twitter:description" content="${description}">
                <meta name="twitter:image" content="${'Goodbit101'}">
                <meta name="twitter:image:height" content="${height}">
                <meta name="twitter:image:width" content="${width}">
                <meta name="twitter:site" content="${sitename}"/>
                <meta name="twitter:card" content="summary"/>` );
                response.send(result);
            }else{
                defaultTag(response,data);
            }
        });
    });
 }
function getBlogData(request,response){
    let page_slug = request.originalUrl.split("/")
    // console.log(page_slug[page_slug.length - 1]);
    let metadata;
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
        return console.log(err);
        }
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": "https://admin.goodbit101.com/api/v1/blog",
            "body": JSON.stringify({
                'slug':page_slug[page_slug.length - 1]
            })
        },
        (error, res, body) => {
            if(error) {
                return console.dir(error);
            }
            metadata = JSON.parse(body);
            // console.log(page_slug[page_slug.length - 1]);
            if(metadata.blog){
                var title = metadata.blog.title ? metadata.blog.title : 'Goodbit101';
                var sitename =  'Goodbit101';
                var url =   'https://www.goodbit101.com/blog-detail/'+page_slug[page_slug.length - 1];
                var height =  (metadata.blog.height ? metadata.blog.height : '' );
                var width =  (metadata.blog.width ? metadata.blog.width : '' );
                var description = (metadata.blog.overview ? metadata.blog.overview : 'Goodbit');
                var image = ((metadata.blog.landscape_image) ? metadata.displayUrl + metadata.blog.landscape_image : 'https://www.goodbit101.com/goodbit-thumbnail.png' );
                var result = data.replace(/<og-tag\/>/g, `<meta name="title" content="${title}">
                <meta name="description" content="${description}" />
                <meta name="author" content="--">

                <meta itemprop="name" content="${title}">
                <meta itemprop="description" content="${description}">
                <meta itemprop="url" content="${url}">
                <meta itemprop="image" content="${image}">
                <meta itemprop="height" content="${height}">
                <meta itemprop="width" content="${width}">

                <meta property="og:title" content="${title}">
                <meta property="og:description" content="${description}">
                <meta property="og:url" content="${url}">
                <meta property="og:site_name" content="${sitename}">
                <meta property="og:image" content="${image}">
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="${title}">
                <meta name="twitter:description" content="${description}">
                <meta name="twitter:image" content="${'Goodbit101'}">
                <meta name="twitter:image:height" content="${height}">
                <meta name="twitter:image:width" content="${width}">
                <meta name="twitter:site" content="${sitename}"/>
                <meta name="twitter:card" content="summary"/>` );
                response.send(result);
            }
            else{
                defaultTag(response,data);
            }
        });
    });
}
 function getData(request,response){
     let page_slug = request.originalUrl.split("/")
    //  console.log(page_slug[page_slug.length - 1]);
     let metadata;
     const filePath = path.resolve(__dirname, './build', 'index.html');
     fs.readFile(filePath, 'utf8', function (err,data) {
         if (err) {
         return console.log(err);
         }
         Request.post({
             "headers": { "content-type": "application/json" },
             "url": "https://admin.goodbit101.com/api/v1/meta",
             "body": JSON.stringify({
                 'page_slug':(request.originalUrl ==("/" || "") ? "home" : page_slug[page_slug.length - 1])
             })
         },
         (error, res, body) => {
             if(error) {
                 return console.dir(error);
             }
             metadata = JSON.parse(body);
             if(metadata.result){
                var title = metadata.result.title ? metadata.result.title : 'Goodbit101';
                var sitename = metadata.result.sitename ? metadata.result.sitename : 'Goodbit101';
                var url = metadata.result.url ? metadata.result.url : 'https://www.goodbit101.com';
                var height = metadata.result.height ? metadata.result.height : '' ;
                var width = metadata.result.width ? metadata.result.width : '' ;
                var description = metadata.result.description ? metadata.result.description : 'Goodbit';
                var image = (metadata.result.image ? metadata.displayUrl+'meta/'+metadata.result.image : 'https://www.goodbit101.com/goodbit-thumbnail.png' );
                var result = data.replace(/<og-tag\/>/g, `<meta name="title" content="${title}">
                <meta name="description" content="${description}" />
                <meta name="author" content="--">

                <meta itemprop="name" content="${title}">
                <meta itemprop="description" content="${description}">
                <meta itemprop="url" content="${url}">
                <meta itemprop="image" content="${image}">
                <meta itemprop="height" content="${height}">
                <meta itemprop="width" content="${width}">

                <meta property="og:title" content="${title}">
                <meta property="og:description" content="${description}">
                <meta property="og:url" content="${url}">
                <meta property="og:site_name" content="${sitename}">
                <meta property="og:image" content="${image}">
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="${title}">
                <meta name="twitter:description" content="${description}">
                <meta name="twitter:image" content="${'Goodbit101'}">
                <meta name="twitter:image:height" content="${height}">
                <meta name="twitter:image:width" content="${width}">
                <meta name="twitter:site" content="${sitename}"/>
                <meta name="twitter:card" content="summary"/>` );
                response.send(result);
             }else{
                defaultTag(response,data);
             }
         });
     });
}
function defaultTag(response,data) {
    var title =  "Goodbit101";
    var sitename =  'Goodbit101';
    var url =  'https://www.goodbit101.com';
    var height =  '';
    var width =  '';
    var description = "Goodbit101";
    var image = 'https://www.goodbit101.com/goodbit-thumbnail.png';
    var result = data.replace(/<og-tag\/>/g, `<meta name="title" content="${title}">
    <meta name="description" content="${description}" />
    <meta name="author" content="--">

    <meta itemprop="name" content="${title}">
    <meta itemprop="description" content="${description}">
    <meta itemprop="url" content="${url}">
    <meta itemprop="image" content="${image}">
    <meta itemprop="height" content="${height}">
    <meta itemprop="width" content="${width}">

    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="${sitename}">
    <meta property="og:image" content="${image}">
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${'Goodbit101'}">
    <meta name="twitter:image:height" content="${height}">
    <meta name="twitter:image:width" content="${width}">
    <meta name="twitter:site" content="${sitename}"/>
    <meta name="twitter:card" content="summary"/>` );
    response.send(result)
 }
