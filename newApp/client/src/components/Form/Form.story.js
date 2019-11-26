import React from 'react';
import { Form } from './Form.component';
import { FormPropTypes } from './Form.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const FormStory = () =>

const FormStory = storiesOf('Components/Form', module);
FormStory.addDecorator(withKnobs);
FormStory.add('VideoPlayer', () => {
    const props =
    return (
        <Form />;
    );
});
