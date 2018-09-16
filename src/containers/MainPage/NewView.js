import React, {
    Component,
} from 'react'
import {
    Link,
} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {
    AppConfig,
    AppLang,
} from '@internal/constants'

export default class New extends Component {
	render = () => (
		<div>
            <input type='text' name='title' placeholder='Title' />
            <input type='text' name='detail' placeholder='Detail' />
            <Button
                variant='contained'
                color='primary'
            >
                {AppLang.content.page.new.subit}
            </Button>
            <Link
                to={AppConfig.route.home}
            >
                {AppLang.content.page.new.toHome}
            </Link>
		</div>
	)
}
