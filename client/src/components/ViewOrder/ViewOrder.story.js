import React from 'react';
import { ViewOrder } from './ViewOrder.component';
import { ViewOrderPropTypes } from './ViewOrder.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ViewOrderStory = () =>

const ViewOrderStory = storiesOf('Components/ViewOrder', module);
ViewOrderStory.addDecorator(withKnobs);
ViewOrderStory.add('VideoPlayer', () => {
    const props =
    return (
        <ViewOrder />;
    );
});
