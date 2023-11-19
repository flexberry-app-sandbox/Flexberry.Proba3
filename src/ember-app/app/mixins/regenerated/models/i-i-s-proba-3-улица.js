import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  квартира: DS.belongsTo('i-i-s-proba-3-квартира', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-proba-3-улица.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  квартира: {
    descriptionKey: 'models.i-i-s-proba-3-улица.validations.квартира.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УлицаE', 'i-i-s-proba-3-улица', {
    наименование: attr('Наименование', { index: 0 }),
    квартира: belongsTo('i-i-s-proba-3-квартира', 'Квартира', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('УлицаL', 'i-i-s-proba-3-улица', {
    наименование: attr('Наименование', { index: 0 }),
    квартира: belongsTo('i-i-s-proba-3-квартира', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
