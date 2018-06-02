import DS from 'ember-data';

export default DS.Model.extend({
	nom : DS.attr(),
	festivals : DS.hasMany('festival')
});
