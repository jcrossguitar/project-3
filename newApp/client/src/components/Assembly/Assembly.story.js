import React from 'react';
import { Assembly } from './Assembly.component';
import { AssemblyPropTypes } from './Assembly.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const AssemblyStory = () =>

const AssemblyStory = storiesOf('Components/Assembly', module);
AssemblyStory.addDecorator(withKnobs);
AssemblyStory.add('VideoPlayer', () => {
    const props =
    return (
        <Assembly />;
    );
});
