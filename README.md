# Simple Carousel Component using Backbone.js

This project can be used as a boilerplate of BackboneJS using Webpack and Babel, enabling us to write plain ES6 code. 
It comes with a NodeJS server that servers some sample data and also integrates with Webpack Dev Server.

![Simple Carousel](https://github.com/jpinho/backbone-simple-carousel/raw/master/demo.gif)

## Project Run Book

- `git clone <this_repo>`
- `cd backbone-simple-carousel` 
- run `npm install`
- run `npm start`
- open your browser and type the address http://localhost:9000

## Uses

You can either use just the CarouselView on your project, or use just the boilerplate BackboneJs App as a kick starter.

## Components

### CarouselView

A Carousel Component developed without any external plugins, except for the BackboneJS wrapping utilities and Underscore templating engine to render the HTML.

CarouselView received the following parameters:

|param|type|default|description|
|:--|:--|:--|:--|
|model.width|`int`|1024|The Carousel container width|
|model.height|`int`|480|The Carousel container height|
|model.blocksToDisplay|`int`|4|The number of blocks to display|
|model.items|`[{title: String, images: ArrayOf(String)}, ...]`|null|The model containing the data to display|
