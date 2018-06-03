import Route from '@ember/routing/route';

export default Route.extend({
	actions :{
		editFestival(){
			const festival = this.get("controller.model");
		   	festival.save();
		   	this.transitionTo("festivals");
		}
	}
});
