import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'https://enigmatic-mesa-54192.herokuapp.com/',
	namespace : 'api/v1',
});
