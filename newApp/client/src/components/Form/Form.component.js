import React from 'react';
import { FormProps } from './Form.propTypes';
import styles from './Form.styles.scss';

export const Form = props => {
    return (
        <div>
            Form component atom
        </div>
    );
};

Form.propTypes = FormProps.propTypes;
Form.defaultProps = FormProps.defaultProps;
