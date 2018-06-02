
const {
  Route,
  inject: {
    service,
  },
  get,
} = Ember;

export default Route.extend({
	auth : service(),

	beforeModel(){
		if(!get(this, 'auth.isAuthenticated')) this.transitionTo('accueil');
	},
	
	model(){
		return [{
			id : 1,
			nom : "Rock"
		} , {
			id : 2,
			nom : "Rap"
		} , {
			id : 3,
			nom : "Electro"
		} , {
			id : 4, 
			nom : "Hard Rock"
		}]
	}
});
