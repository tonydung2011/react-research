import React, {
    Component,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    AppConfig,
} from '@internal/constants';

export default class Home extends Component {
	render = () => (
		<div>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="detail" placeholder="Detail"/>
            <button onPress>done</button>
            <Link
                to={AppConfig.route.home}
            />
		</div>
	)
}
