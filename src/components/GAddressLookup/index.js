import React from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import PlacesLookupComponent from './component';
/**
 * The GAddressLookup component is used to find a location.
 */
export default function GAddressLookup(props) {
    const { apiKey, ...rest } = props;

    const Component = scriptLoader(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
    )(PlacesLookupComponent);

    return <Component {...rest} />;
}

GAddressLookup.propTypes = {
    /** The application's API key. To use the Google Maps JavaScript API,
     * you must get an API Key. See https://console.cloud.google.com/google/maps-apis/overview
     * to get an API Key. */
    apiKey: PropTypes.string.isRequired,
    /** Text label for the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the component label. */
    hideLabel: PropTypes.bool,
    /** Specifies the selected value of the component. */
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.node,
        }),
        PropTypes.string,
    ]),
    /** The name of the component. */
    name: PropTypes.string,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies that the component must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the component must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the component element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**  The action triggered when click/select an option. */
    onChange: PropTypes.func,
    /** */
    searchOptions: PropTypes.shape({}),
};

GAddressLookup.defaultProps = {
    apiKey: 'AIzaSyAw4HF5sbo6D6sDmRvPeKrKtn4ZpwUvvSA',
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    tabIndex: undefined,
    label: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
    searchOptions: {},
};
