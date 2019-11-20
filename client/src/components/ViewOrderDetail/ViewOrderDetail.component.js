import React from 'react';
import { ViewOrderDetailProps } from './ViewOrderDetail.propTypes';
import styles from './ViewOrderDetail.styles.scss';

export const ViewOrderDetail = props => {
    return (
        <div>
            View Order Detail component atom
        </div>
    );
};

ViewOrderDetail.propTypes = ViewOrderDetailProps.propTypes;
ViewOrderDetail.defaultProps = ViewOrderDetailProps.defaultProps;
