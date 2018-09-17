import React, {
    Component,
} from 'react'
import {
    Link,
} from 'react-router-dom'

import {
	AppConfig,
} from '@internal/constants'

export default class Home extends Component {
	render = () => (
			<div>
				<h1>React Research</h1>

				<h2>Get Started</h2>
				<h2>Hello world</h2>
				<ol>
					<li>Review the <Link to={AppConfig.route.new} >demo app</Link></li>
					<li>Remove the demo and start coding: npm run remove-demo</li>
				</ol>
			</div>
	)
}
