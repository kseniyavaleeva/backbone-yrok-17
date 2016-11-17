(function(){
	
	window.App = {
		Views: {},
		Models: {},
		Collections : {},
		Router:{}
	};
	
	
	window.template = function(id){
        return _.template($('#' + id).html());
};

App.Router = Backbone.Router.extend({
   routes:{
	'' : 'index',
	'read': 'read'
   },

     index: function(){
          console.log('Всем привет от индексного роута!');
   },
   
   
   read: function(){
	    console.log('Это роут Read');
   }
});

new App.Router();
Backbone.history.start();


})();