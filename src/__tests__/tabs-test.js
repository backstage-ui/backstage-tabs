/* global describe, it, expect, beforeEach, afterEach, jest */
/* eslint func-names: ["off"] */

import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Tabs from '../tabs';
import Tab from '../tab';

describe('Tabs', () => {
  const tabsData = [
    { label: 'Label Teste', value: 'teste' },
    { label: 'Label Teste 2', value: 'teste 2' },
    { label: 'Label Teste 3', value: 'teste 3' },
  ];

  const defaultProps = {
    tabs: tabsData,
    activeTab: tabsData[0].value,
  };

  it('should accept className', function () {
    const wrapper = shallow(<Tabs {...defaultProps} className="foobar" />);
    expect(wrapper.hasClass('foobar')).toBe(true);
  });

  it('should have tab items', function () {
    const wrapper = shallow(<Tabs {...defaultProps} />);

    const renderedTabItems = wrapper.find(Tab);
    expect(renderedTabItems.length).toBe(3);
  });

  it('should have activeTab props as active', function () {
    const wrapper = mount(<Tabs tabs={tabsData} activeTab={tabsData[1].value} />);
    expect(wrapper.find('.bs-ui-tabs__tab--active').text()).toBe(tabsData[1].label);
  });

  it('should pass active to the active Tab item', function () {
    const wrapper = shallow(<Tabs {...defaultProps} />);
    const renderedTabItems = wrapper.find(Tab);

    expect(renderedTabItems.first().prop('active')).toBe(true);
    expect(renderedTabItems.last().prop('active')).toBe(false);
  });

  it('click Tab should call onClickTab callback whenever a Tab has been clicked', function () {
    const onClickTab = jest.fn();
    const wrapper = mount(<Tabs {...defaultProps} onClickTab={onClickTab} />);
    const tab = wrapper.find(Tab).last();

    tab.simulate('click');
    expect(onClickTab).toBeCalled();
    expect(onClickTab).toBeCalledWith(tabsData[tabsData.length - 1]);
  });

  describe('component update', function () {
    beforeEach(function () {
      this.renderStub = sinon.stub(Tabs.prototype, 'render').returns(null);
      this.wrapper = mount(<Tabs {...defaultProps} />);
    });

    afterEach(function () {
      this.renderStub.restore();
    });

    describe('should rerender', function () {
      it('if tabs props change', function () {
        this.wrapper.setProps({
          ...this.wrapper.props,
          tabs: [...tabsData, { value: 'melao', label: 'Melao' }],
        });
        expect(this.renderStub.calledTwice).toBe(true);
      });

      it('if small props change', function () {
        this.wrapper.setProps({
          ...this.wrapper.props,
          small: true,
        });
        expect(this.renderStub.calledTwice).toBe(true);
      });

      it('if large props change', function () {
        this.wrapper.setProps({
          ...this.wrapper.props,
          large: true,
        });
        expect(this.renderStub.calledTwice).toBe(true);
      });

      it('if className props change', function () {
        this.wrapper.setProps({
          ...this.wrapper.props,
          className: 'testClass',
        });
        expect(this.renderStub.calledTwice).toBe(true);
      });

      it('if activeTab props change', function () {
        this.wrapper.setProps({
          ...this.wrapper.state,
          activeTab: tabsData[1].value,
        });
        expect(this.renderStub.calledTwice).toBe(true);
      });
    });
  });
});
