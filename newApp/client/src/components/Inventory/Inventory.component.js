import React from 'react';
import { InventoryProps } from './Inventory.propTypes';
import styles from './Inventory.styles.scss';

export const Inventory = props => {
    return (
        <div>
            Inventory component atom
        </div>
    );
};

Inventory.propTypes = InventoryProps.propTypes;
Inventory.defaultProps = InventoryProps.defaultProps;
