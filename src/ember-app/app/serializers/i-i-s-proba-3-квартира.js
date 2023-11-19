import { Serializer as КвартираSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba-3-квартира';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КвартираSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
