# Simple Carousel Component using Backbone.js

This project can be used as a boilerplate of BackboneJS using Webpack and Babel, enabling us to write plain ES6 code. 
It comes with a NodeJS server that servers some sample data and also integrates with Webpack Dev Server.

![Simple Carousel](http://github.com/jpinho/backbone-simple-carousel/demo.gif)

## Project Run Book

- git clone this repo
- run `npm install`
- run `npm start`
- open your browser and type the address http://localhost:9000

## Uses

You can either use just the CarouselView on your project, or use just the boilerplate BackboneJs App as a kick starter.

## Components

### CarouselView

CarouselView received the following parameters:

|param|type|default|description|
|--|--|--|--|
|width|int|1024|The Carousel container width|
|height|int|480|The Carousel container height|
|blocksToDisplay|4|int|The number of blocks to display|
|model| [{title: String, images: ArrayOf(String)}, ...]|null|The model containing the data to display|
