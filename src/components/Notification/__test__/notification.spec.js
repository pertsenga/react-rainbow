import React from 'react';
import { mount } from 'enzyme';
import Notification from './../index';

describe('<Notification/>', () => {
    it('should call onClick function when someone click over', () => {
        const onClickFn = jest.fn();
        const component = mount(
            <Notification title="Notification test" onRequestClose={onClickFn} />,
        );
        component.find('button.rainbow-notification_close').simulate('click');
        expect(onClickFn).toHaveBeenCalledTimes(1);
    });
    it('should set the prop size as "x-small" in ButtonIcon', () => {
        const component = mount(
            <Notification title="Notification test" />,
        );
        expect(component.find('ButtonIcon').prop('size')).toBe('x-small');
    });
    it('should have the right class names', () => {
        const component = mount(
            <Notification title="Notification test" />,
        );
        expect(component.find('div').prop('className')).toBe('rainbow-notification');
    });
    it('should have the right class names when have a custom class', () => {
        const component = mount(
            <Notification title="Notification test" className="my-custom-class-name" />,
        );
        expect(component.find('div').prop('className')).toBe('rainbow-notification my-custom-class-name');
    });
});