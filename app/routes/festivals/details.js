import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
	model(params){
		return this.store.findRecord('festival', params.festival_id, {include: 'ville'})
	},
	

	renderTemplate: function() {
      this.render('festivals.details', { into: 'application' });
  	},

});
