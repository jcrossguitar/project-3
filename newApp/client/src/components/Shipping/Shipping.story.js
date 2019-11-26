import React from 'react';
import { Shipping } from './Shipping.component';
import { ShippingPropTypes } from './Shipping.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ShippingStory = () =>

const ShippingStory = storiesOf('Components/Shipping', module);
ShippingStory.addDecorator(withKnobs);
ShippingStory.add('VideoPlayer', () => {
    const props =
    return (
        <Shipping />;
    );
});
