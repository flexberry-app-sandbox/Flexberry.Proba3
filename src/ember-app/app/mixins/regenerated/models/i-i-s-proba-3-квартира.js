import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  воПад: DS.attr('number'),
  номер: DS.attr('number')
});

export let ValidationRules = {
  воПад: {
    descriptionKey: 'models.i-i-s-proba-3-квартира.validations.воПад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-proba-3-квартира.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КвартираE', 'i-i-s-proba-3-квартира', {
    номер: attr('Номер', { index: 0 })
  });

  modelClass.defineProjection('КвартираL', 'i-i-s-proba-3-квартира', {
    номер: attr('Номер', { index: 0 })
  });
};
