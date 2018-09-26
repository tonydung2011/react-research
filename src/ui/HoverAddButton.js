import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import withStyles from '@material-ui/core/styles/withStyles';
import AddIcon from '@material-ui/icons/add'
import PropTypes from 'prop-types'

import {
    styles,
} from '@internal/styles';

const HoverAddButon = ({
    callback, classes,
}) => (
    <ButtonBase
        className={classes.button}
        onClick={() => {
            if (callback && typeof callback === 'function') {
                callback()
            }
        }}
    >
        <div>
            <AddIcon color='disable' className='addIcon' />
        </div>
    </ButtonBase>
)

HoverAddButon.propTypes = {
    callback: PropTypes.func,
    classes: PropTypes.object.isRequired,
}

HoverAddButon.defaultProps = {
    callback: () => {},
}

export default withStyles(styles.ui.hoverButton.add)(HoverAddButon)
