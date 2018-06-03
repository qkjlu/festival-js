import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.createRecord('festival');
	},
	actions : {
		createFestival() {
		      const festival = this.modelFor('festival');
		      festival.save().then(function() {
		        this.transitionTo('festival');
		      })
		    }
	}
});
