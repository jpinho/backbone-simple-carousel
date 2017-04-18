import 'es5-shim'
import $ from 'jquery'

import HomeView from 'views/Home'
import Backbone from 'backbone'
import 'styles/app.scss'

Backbone.history.start()

$(function() {
  new HomeView()
})
