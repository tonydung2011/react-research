import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Img from 'react-image'
import {
    colors,
} from '@internal/styles'
import { AppConfig } from '@internal/constants';

const defaultStyle = {
    backgroundColor: colors.white,
    padding: 2,
    borderRadius: '50%',
}

const Avatar = ({
    imageUrl,
    size,
}) => {
    const newStyle = _.merge(defaultStyle, size)
    return (
        <Img
            src={imageUrl}
            style={newStyle}
        />
    )
}

Avatar.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.shape({
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    })
}

Avatar.defaultProps = {
    imageUrl: AppConfig.img.avatar,
    size: {
        width: 70,
        height: 70,
    }
}

export default Avatar
