import Ember from 'ember';
//import config from 'auth0-ember-samples/config/environment';


const {
  computed,
  Service,
  get,
  RSVP,
  isPresent,
} = Ember;

export default Service.extend({
  auth0: computed(function () {
    return new auth0.WebAuth({
      domain: 'festival-js.eu.auth0.com',
      clientID: 'ZvXDC1xH4soANwvzehIrdyjJL3xAnI04',
      redirectUri: 'https://hidden-journey-26032.herokuapp.com/',
      audience: 'https://festival-js.eu.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });
  }),

  isAuthenticated: computed(function() {
    return isPresent(this.getSession().access_token) && this.isNotExpired();
  }).volatile(),

  login() {
    get(this, 'auth0').authorize();
  },

  handleAuthentication() {
    return new RSVP.Promise((resolve, reject) => {
      get(this, 'auth0').parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        } else if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  },

  getSession() {
    return {
      access_token: localStorage.getItem('access_token'),
      id_token: localStorage.getItem('id_token'),
      expires_at: localStorage.getItem('expires_at')
    };
  },

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the Access Token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }
  },

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.notifyPropertyChange('isAuthenticated');
  },

  isNotExpired() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = this.getSession().expires_at;
    return new Date().getTime() < expiresAt;
  }

});
