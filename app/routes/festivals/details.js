import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({

	model(params){
		return this.store.findRecord('festival', params.festival_id, {include: 'ville'})
	},
	

	renderTemplate: function() {
      this.render('festivals.details', { into: 'application' });
  	},

  	actions : {
  		deleteFestival(id) {
  			var _this = this;
  			this.store.findRecord('festival', id, { backgroundReload: false }).then(function(festival){
  				festival.destroyRecord();
  				_this.transitionTo('festivals');
  			})
  			// this.get('controller.model').deleteRecord();
  			// this.get('controller.model').save();
  		},
  			
  			
  	}
  	

});
