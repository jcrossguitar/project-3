import React from 'react';
import { Form2 } from './Form2.component';
import { Form2PropTypes } from './Form2.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const Form2Story = () =>

const Form2Story = storiesOf('Components/Form2', module);
Form2Story.addDecorator(withKnobs);
Form2Story.add('VideoPlayer', () => {
    const props =
    return (
        <Form2 />;
    );
});
