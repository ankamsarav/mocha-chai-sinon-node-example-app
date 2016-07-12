/**
 * Created by vsury1 on 7/4/16.
 */
import {expect} from 'chai';
import {errorForEmptyFields} from '../ObjectHelper';

describe('Object Helpers Test :: ', ()=> {
  "use strict";
  // Empty Value should return empty array
  it('returns empty array when the object passed is null or empty', ()=> {
    const passObj = {};
    expect(errorForEmptyFields(passObj)).to.have.length(0);

  });

  // Proper object should return exact number of empty keys

  it('returns array of errors with one value when the object passed has one null attribute', ()=> {
    const passObj = {name: 'sammy sosa', weight: null};
    expect(errorForEmptyFields(passObj)).to.have.length(1);
  });

  // Proper object should return exact number of empty keys with appropriate return value

  it('returns array of errors with one value and exact message when the object passed has one null attribute', ()=> {
    const passObj = {name: 'sammy sosa', weight: null};
    expect(errorForEmptyFields(passObj)[0]).to.eql({message: "Weight"});
  });

  // Proper object should return exact number of empty keys

  it('returns array of errors when the object has more than one null attribute', ()=> {
    const passObj = {name: 'babe ruth', weight: null, homeRun: null};
    expect(errorForEmptyFields(passObj)).to.have.length(2);
  });

  // Proper object should return exact number of empty keys with appropriate return values.

  it('returns array of errors with appropriate message when the object has more than one null attribute', ()=> {
    const passObj = {name: 'babe ruth', weight: null, homeRun: null};
    expect(errorForEmptyFields(passObj)[1]).to.eql({message: "Home Run"});
  });

});
