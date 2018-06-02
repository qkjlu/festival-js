import Component from '@ember/component';

const {
	Service,
	inject : { service },
	get,
} = Ember;

export default Component.extend({
	auth : service(),
	actions : {
		login(){
			get(this, 'auth').login();
		},
		logout(){
			get(this, 'auth').logout();
		}
	},
});
