import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalNavigation from './../../../src/components/VerticalNavigation';
import Sections from './sections';
import VerticalItem from '../../../src/components/VerticalItem';
import VerticalSection from '../../../src/components/VerticalSection';
import './styles.css';

function resolveCurrentUrl() {
    return window.location.href.split('#/')[1] || 'GettingStarted';
}

export default class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: resolveCurrentUrl(),
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { items, searchTerm } = this.props;
        const { selectedItem } = this.state;

        if (!items.length) {
            return null;
        }

        return (
            <VerticalNavigation
                compact
                className="rainbow-p-bottom_large react-rainbow-vertical-navigation"
                selectedItem={selectedItem}
                onSelect={this.handleOnSelect}>
                <VerticalSection>
                    <VerticalItem
                        name="GettingStarted"
                        label="Getting Started"
                        href="/#/GettingStarted" />
                    <VerticalItem
                        name="Experiences"
                        label="Experiences"
                        href="/#/Experiences" />
                    <VerticalItem
                        name="Components"
                        label="Components"
                        href="/#/Components" />
                </VerticalSection>
                <Sections selectedItem={selectedItem} items={items} searchTerm={searchTerm} />
            </VerticalNavigation>
        );
    }
}

ComponentsList.propTypes = {
    items: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
};
