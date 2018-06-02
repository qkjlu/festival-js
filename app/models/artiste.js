import DS from 'ember-data';

export default DS.Model.extend({
	nom : DS.attr(),
	image : DS.attr(),
	idGenreMusical : DS.attr(),
	description : DS.attr()

});
