/**
 * Created by vsury1 on 7/12/16.
 */
import _ from 'lodash';

export function errorForEmptyFields(passedObj) {
  return _.keys(passedObj).reduce((errors, key) => {
    if (!passedObj[key]) {
      errors.push({message: _.startCase(key)});
    }
    return errors;
  }, []);
}
