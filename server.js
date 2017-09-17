// Dependencies
const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Scraping Tools
var cheerio = require('cheerio');
var request = require('request');

//Initialize Express
const app = express();


// Make a request call to grab the HTML body from the site of your choice
request("https://www.theatlantic.com/latest/", function(error, response, html) {


  var $ = cheerio.load(html);


  var results = [];


  $("li.article").each(function(i, element) {

    var link = $(element).children().attr("href");
    var title = $(element).children().children(".hed").text();
  //  var summary = $(".o-dek").children().text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link//,
      //summary: summary
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
