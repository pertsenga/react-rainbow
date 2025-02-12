import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Label(props) {
    const { label, inputId, disabled, hideLabel, id } = props;

    const getLabelClassNames = () =>
        classnames('rainbow-input-radio_label', {
            'rainbow-input-radio_label--disabled': disabled,
            'rainbow-input-radio_label--hide': hideLabel,
        });

    return (
        <label className="rainbow-input-radio_label-container" htmlFor={inputId} id={id}>
            <span className="rainbow-input-radio_faux" />
            <span className={getLabelClassNames()}>{label}</span>
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    inputId: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    hideLabel: PropTypes.bool,
    id: PropTypes.string,
};

Label.defaultProps = {
    hideLabel: false,
    id: undefined,
};
