var database;
var form,
  game,
  friend,
  playerCount = 0;
 
var gameState = 0;
var totalresponse=0;
var title, view;
var allinfo;
var element;
function preload() {
  bgimg = loadImage("bgpic.png");
}

function setup() {
 
  canvas = createCanvas(950,450);
  database = firebase.database();
  title = createElement('h1');
  view = createButton("View");
 }

function draw() {
  background(bgimg)
//Getting total number of responses



title.html("Your "+ totalresponse + " friends have filled the Scrapbook");
title.position(100,50);

view.position(700,80);
view.size(100,30);





}

