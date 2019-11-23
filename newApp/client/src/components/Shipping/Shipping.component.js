import React from 'react';
import { ShippingProps } from './Shipping.propTypes';
import styles from './Shipping.styles.scss';

export const Shipping = props => {
    return (
        <div>
            Shipping component atom
        </div>
    );
};

Shipping.propTypes = ShippingProps.propTypes;
Shipping.defaultProps = ShippingProps.defaultProps;
