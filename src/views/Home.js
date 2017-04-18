define([
	'jquery',
	'underscore',
	'backbone',
	'components/Carousel',
	'collections/MediaCollection'
], function ($, _, Backbone, CarouselView, MediaCollection) {
	'use strict'

	var HomeView = Backbone.View.extend({
		el: '#home',

		initialize: function () {
			this.listenTo(MediaCollection, 'all', this.render)
			MediaCollection.fetch({reset:true})
		},

		render: function () {
			if (MediaCollection.length) {
				const $carousel = new CarouselView({
					model: MediaCollection.toArray().map((item) => item.toJSON())
				}).render().$el

				this.$el.html($carousel)
			}
			return this
		}
	})

	return HomeView
})
