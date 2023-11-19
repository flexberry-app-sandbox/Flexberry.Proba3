import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba_3КвартираLForm from './forms/i-i-s-proba-3-квартира-l';
import IISProba_3УлицаLForm from './forms/i-i-s-proba-3-улица-l';
import IISProba_3КвартираEForm from './forms/i-i-s-proba-3-квартира-e';
import IISProba_3УлицаEForm from './forms/i-i-s-proba-3-улица-e';
import IISProba_3КвартираModel from './models/i-i-s-proba-3-квартира';
import IISProba_3УлицаModel from './models/i-i-s-proba-3-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-3-квартира': IISProba_3КвартираModel,
    'i-i-s-proba-3-улица': IISProba_3УлицаModel
  },

  'application-name': 'Proba_3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba_3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_3',
          title: 'Proba_3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proba-3': {
          caption: 'Proba_3',
          title: 'Proba_3',
          'i-i-s-proba-3-квартира-l': {
            caption: 'Квартира',
            title: ''
          },
          'i-i-s-proba-3-улица-l': {
            caption: 'Улица',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba-3-квартира-l': IISProba_3КвартираLForm,
    'i-i-s-proba-3-улица-l': IISProba_3УлицаLForm,
    'i-i-s-proba-3-квартира-e': IISProba_3КвартираEForm,
    'i-i-s-proba-3-улица-e': IISProba_3УлицаEForm
  },

});

export default translations;
