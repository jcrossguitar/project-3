import React from 'react';
import { CheeseInfo } from './CheeseInfo.component';
import { CheeseInfoPropTypes } from './CheeseInfo.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const CheeseInfoStory = () =>

const CheeseInfoStory = storiesOf('Components/CheeseInfo', module);
CheeseInfoStory.addDecorator(withKnobs);
CheeseInfoStory.add('VideoPlayer', () => {
    const props =
    return (
        <CheeseInfo />;
    );
});
