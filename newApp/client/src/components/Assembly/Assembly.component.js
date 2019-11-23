import React from 'react';
import { AssemblyProps } from './Assembly.propTypes';
import styles from './Assembly.styles.scss';

export const Assembly = props => {
    return (
        <div>
            Assembly component atom
        </div>
    );
};

Assembly.propTypes = AssemblyProps.propTypes;
Assembly.defaultProps = AssemblyProps.defaultProps;
