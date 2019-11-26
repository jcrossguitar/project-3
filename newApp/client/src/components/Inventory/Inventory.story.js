import React from 'react';
import { Inventory } from './Inventory.component';
import { InventoryPropTypes } from './Inventory.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const InventoryStory = () =>

const InventoryStory = storiesOf('Components/Inventory', module);
InventoryStory.addDecorator(withKnobs);
InventoryStory.add('VideoPlayer', () => {
    const props =
    return (
        <Inventory />;
    );
});
