import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.createRecord('festival');
	},

	renderTemplate: function() {
      this.render('festivals.create', { into: 'application' });
  	},

	actions : {
		createFestival() {
			  // const festival = this.get("controller.model").then(function(){
			  // 	festival.save().then(function(){
			  // 		this.transitionTo('festivals');
			  // 	});
			  // });
		   	  //const festival = this.get('controller.model');
		   	  //this.model().save();
		   	  const festival = this.get("controller.model");
		   	  festival.save();
		   	  this.transitionTo("festivals");

		    }
	}
});
