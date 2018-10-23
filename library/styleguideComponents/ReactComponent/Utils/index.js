import React from 'react';
import PropTypes from 'prop-types';
import ExperienceExampleCard from './experienceExampleCard';
import PageObjectCard from './pageObjectCard';
import './styles.css';

export default function Util(props) {
    const { response, type, componentName } = props;

    if (response && Array.isArray(response.results) && response.results.length) {
        if (type === 'experience-examples') {
            return (
                <div>
                    <div className="react-rainbow-utils_text rainbow-m-around_medium">
                        <h1 className="react-rainbow-utils_text-header">Real experience examples</h1>
                        <p className="react-rainbow-utils_text-description">
                            {`The Real experience examples will help you get
                            started building your app using the ${componentName} Component.`}
                        </p>
                    </div>
                    <ExperienceExampleCard results={response.results} />
                </div>
            );
        }
        return <PageObjectCard results={response.results} type={type} />;
    }
    return null;
}

Util.propTypes = {
    response: PropTypes.object,
    type: PropTypes.string,
    componentName: PropTypes.string,
};

Util.defaultProps = {
    response: null,
    type: undefined,
    name: undefined,
    componentName: undefined,
};