import React from 'react';
import { ViewOrderProps } from './ViewOrder.propTypes';
import styles from './ViewOrder.styles.scss';

export const ViewOrder = props => {
    return (
        <div>
            View Order component atom
        </div>
    );
};

ViewOrder.propTypes = ViewOrderProps.propTypes;
ViewOrder.defaultProps = ViewOrderProps.defaultProps;
