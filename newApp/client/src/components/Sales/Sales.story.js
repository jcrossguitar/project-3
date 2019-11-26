import React from 'react';
import { Sales } from './Sales.component';
import { SalesPropTypes } from './Sales.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const SalesStory = () =>

const SalesStory = storiesOf('Components/Sales', module);
SalesStory.addDecorator(withKnobs);
SalesStory.add('VideoPlayer', () => {
    const props =
    return (
        <Sales />;
    );
});
