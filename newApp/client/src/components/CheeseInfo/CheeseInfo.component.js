import React from 'react';
import { CheeseInfoProps } from './CheeseInfo.propTypes';
import styles from './CheeseInfo.styles.scss';

export const CheeseInfo = props => {
    return (
        <div>
            Cheese Info component atom
        </div>
    );
};

CheeseInfo.propTypes = CheeseInfoProps.propTypes;
CheeseInfo.defaultProps = CheeseInfoProps.defaultProps;
