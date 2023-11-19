import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba-3-квартира-l');
  this.route('i-i-s-proba-3-квартира-e',
  { path: 'i-i-s-proba-3-квартира-e/:id' });
  this.route('i-i-s-proba-3-квартира-e.new',
  { path: 'i-i-s-proba-3-квартира-e/new' });
  this.route('i-i-s-proba-3-улица-l');
  this.route('i-i-s-proba-3-улица-e',
  { path: 'i-i-s-proba-3-улица-e/:id' });
  this.route('i-i-s-proba-3-улица-e.new',
  { path: 'i-i-s-proba-3-улица-e/new' });
});

export default Router;
