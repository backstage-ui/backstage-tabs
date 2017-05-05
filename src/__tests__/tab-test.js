/* global describe, it, expect, beforeEach, afterEach, jest */
/* eslint func-names: ["off"], react/prop-types: ["off"] */

import React, { Component } from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Tab from '../tab';

describe('Tab', function () {
  it('selected should contain expected className', function () {
    const wrapper = shallow(<Tab active />);
    expect(wrapper.prop('className')).toContain('bs-ui-tabs__tab--active');
  });

  it('should call onClick with expect data', function () {
    const onClick = jest.fn();
    const wrapper = shallow(<Tab
      label="Test 2"
      onClick={onClick}
    />);
    wrapper.simulate('click');
    expect(onClick).toBeCalled();
  });

  describe('should component update', function () {
    class FakeComponent extends Component {
      render() {
        return (
          <Tab active={this.props.active} label="Maca" />
        );
      }
    }

    beforeEach(function () {
      this.renderStub = sinon.stub(Tab.prototype, 'render').returns(null);
      this.wrapper = mount(<FakeComponent active={false} />);
    });

    afterEach(function () {
      this.renderStub.restore();
    });

    it('should not rerender if props and state not change', function () {
      this.wrapper.setProps({ active: false });
      this.wrapper.update();

      expect(this.renderStub.calledTwice).not.toBeTruthy();
    });

    it('should rerender if props and state change', function () {
      this.wrapper.setProps({ active: true });
      this.wrapper.update();

      expect(this.renderStub.calledTwice).toBeTruthy();
    });
  });
});
