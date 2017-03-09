/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adventure, { RoomDisplay, adder } from '../Adventure';

describe('Adventure', function () {
  it('runs my test!', function () {
      const rendered = shallow(<Adventure />);
      expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('RoomDisplay', function () {
  it('does stuff', function () {
    let output = shallow(<RoomDisplay roomNumber={1} />);
    expect(toJson(output)).toMatchSnapshot();

    output = shallow(<RoomDisplay roomNumber={2} />);
    expect(toJson(output)).toMatchSnapshot();

    output = shallow(<RoomDisplay roomNumber={5} />);
    expect(toJson(output)).toMatchSnapshot();
  })
})

describe('adder', function () {
  it('does adding', function () {
    expect(adder(3, 5)).toBe(8);
  })
})
