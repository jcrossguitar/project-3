import React from 'react';
import { SalesProps } from './Sales.propTypes';
import styles from './Sales.styles.scss';

export const Sales = props => {
    return (
        <div>
            Sales component atom
        </div>
    );
};

Sales.propTypes = SalesProps.propTypes;
Sales.defaultProps = SalesProps.defaultProps;
