import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba_3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_3',
          title: 'Proba_3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba-3-квартира-l': IISProba_3КвартираLForm,
    'i-i-s-proba-3-улица-l': IISProba_3УлицаLForm,
    'i-i-s-proba-3-квартира-e': IISProba_3КвартираEForm,
    'i-i-s-proba-3-улица-e': IISProba_3УлицаEForm
  },

});

export default translations;
