import React from 'react';
import { ViewOrderDetail } from './ViewOrderDetail.component';
import { ViewOrderDetailPropTypes } from './ViewOrderDetail.propTypes.js';
import { storiesOf } from '@storybook/react';
import {
withKnobs,
number,
select,
color,
boolean,
} from '@storybook/addon-knobs';


export const ViewOrderDetailStory = () =>

const ViewOrderDetailStory = storiesOf('Components/ViewOrderDetail', module);
ViewOrderDetailStory.addDecorator(withKnobs);
ViewOrderDetailStory.add('VideoPlayer', () => {
    const props =
    return (
        <ViewOrderDetail />;
    );
});
