import '../../styles/carousel.scss'

define([
	'jquery',
	'underscore',
	'backbone',
	'holderjs',
	'text!templates/carousel.html',
	'text!templates/carousel-item.html'
], function ($, _, Backbone, holderjs, carouselTmpl, carouselItemTmpl) {
	'use strict'

	const CarouselItemView = Backbone.View.extend({
		template: _.template(carouselItemTmpl),

		render: function () {
			this.$el = $(this.template(this.model))
			return this
		}
	})

	const CarouselView = Backbone.View.extend({
		DEFAULT_WIDTH: 1024,
		DEFAULT_HEIGHT: 480,
		CONTAINER_WIDTH_GAP: 100,
		DEFAULT_BLOCKS_TO_DISPLAY: 4,

		tagName: 'div',
		className: 'carousel-container',
		template: _.template(carouselTmpl),

		events: {
			'click .next': 'next',
			'click .prev': 'prev'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render)
			this.$width = !this.model.width ? this.DEFAULT_WIDTH : this.model.width
			this.$height = !this.model.height ? this.DEFAULT_HEIGHT : this.model.height
			this.$blocksToDisplay = this.model.blocksToDisplay <= 0 ? this.DEFAULT_BLOCKS_TO_DISPLAY : this.model.blocksToDisplay
		},

		render: function () {
			this.$el.html(this.template())
			this.$el.width(this.$width)
			this.$el.height(this.$height)
			this.$items = this.$el.find('.items')

			this.model.forEach((item) => {
				this.$items.append(
					new CarouselItemView({
						model: {
							...item,
							displayImage: item.images[ Math.round( Math.random() * (item.images.length - 1) ) ],
							holderJsDimensions: `${this.$width / this.$blocksToDisplay}x${this.$height}`,
							imageWidth: this.$width / this.$blocksToDisplay,
							imageHeight: this.$height
						}
					}).render().$el
				)
			})

			this.$items.children().first().addClass('active')
			this.$items.width(this.$items.children().length * this.$width + this.CONTAINER_WIDTH_GAP)
			return this
		},

		prev: function() {
			let $active = this.$items.find('.active')
			if ($active.index() === 0) {
				return
			}

			let $prev = $(this.$items.children().get($active.index() - this.$blocksToDisplay))
			this.slideTo($active, $prev)
		},

		next: function() {
			let $active = this.$items.find('.active')
			if (($active.index() + this.$blocksToDisplay) > (this.$items.children().length - 1)) {
				return
			}

			let $next = $(this.$items.children().get($active.index() + this.$blocksToDisplay))
			this.slideTo($active, $next)
		},

		slideTo: function($active, $target) {
			this.$items.css('transform', 'translateX(' + (($target.index() / this.$blocksToDisplay) * -this.$width) + 'px)')
			$active.removeClass('active')
			$target.addClass('active')
		}
	})

	return CarouselView
})
