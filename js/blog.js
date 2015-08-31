
$(function() {

	Parse.$ = jQuery;

	// Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("mVz4K6B03921kHE4EibKrZGHwZn8fD7TqSOVPfX6", "X2eKtf2y2NPD4LYZTMb0zXTVtTymGgtPm6xrStbJ");

	var Blog = Parse.Object.extend("Blog"),
		Blogs = Parse.Collection.extend({
			model: Blog
		}),
		BlogsView = Parse.View.extend({
			template: Handlebars.compile($('#blogs-tpl').html()),
			render: function() { 
				var collection = { blog: this.collection.toJSON() };
				this.$el.html(this.template(collection));
			}
		});
		blogs = new Blogs();

		blogs.fetch({
			success: function(blogs) {
				var blogsView = new BlogsView({ collection: blogs });
				blogsView.render();
				$('.main-container').html(blogsView.el);
			},
			error: function(blogs, error) {
				console.log(error);
			}
		});

});