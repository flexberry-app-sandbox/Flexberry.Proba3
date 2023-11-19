import {
  defineNamespace,
  defineProjections,
  Model as КвартираMixin
} from '../mixins/regenerated/models/i-i-s-proba-3-квартира';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КвартираMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
