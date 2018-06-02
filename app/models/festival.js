import DS from 'ember-data';

export default DS.Model.extend({
	nom : DS.attr(),
	dateDebut : DS.attr('date'),
	dateFin : DS.attr('date'),
	image : DS.attr(),
	ville : DS.belongsTo('ville'),
	nbFestivaliers : DS.attr()
});
