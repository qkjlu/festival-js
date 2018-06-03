import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('festivals', function() {
    this.route('details', {path : '/:festival_id/details'}, function(){
      this.route('edit');
    });
    this.route('create');
  });
  this.route('artistes');
  this.route('genres');
  this.route('villes');
  this.route('pays');
  this.route('accueil', { path : '/'});
  this.route('profil');
});

export default Router;
