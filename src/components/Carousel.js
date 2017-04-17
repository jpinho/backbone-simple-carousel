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
		DEFAULT_WIDTH: 800,
		DEFAULT_HEIGHT: 480,

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
							holderJsDimensions: `${this.$width}x${this.$height}`,
							imageWidth: this.$width
						}
					}).render().$el
				)
			})

			this.$items.children().first().addClass('active')
			this.$items.width(this.$items.children().length * this.$width + 100 /*gap*/)
			return this
		},

		prev: function() {
			let $active = this.$items.find('.active')
			if ($active.index() === 0) {
				return
			}

			let $prev = $(this.$items.children().get($active.index() - 1))

			// slide effect
			this.$items.css('transform', 'translateX(' + ($prev.index() * -this.$width) + 'px)')

			$active.removeClass('active')
			$prev.addClass('active')
		},

		next: function() {
			let $active = this.$items.find('.active')
			if ($active.index() === (this.$items.children().length - 1)) {
				return
			}

			let $next = $(this.$items.children().get($active.index() + 1))

			// slide effect
			this.$items.css('transform', 'translateX(' + ($next.index() * -this.$width) + 'px)')

			$active.removeClass('active')
			$next.addClass('active')
		}
	})

	return CarouselView
})
