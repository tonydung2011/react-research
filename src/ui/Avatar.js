import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Img from 'react-image'
import pose from 'react-pose'
import {
    colors,
} from '@internal/styles'
import { AppConfig } from '@internal/constants'

const defaultContainerStyle = {
    backgroundColor: colors.white,
    borderRadius: '50%',
    overflow: 'hidden',
    margin: 'auto',
}

const defaultStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    marginLeft: 5,
    marginTop: 5,
}

const HoverImg = pose.div({
    hoverable: true,
    init: {
        scale: 1,
    },
    hover: {
        scale: 1.2,
    }
})

const Avatar = ({
    imageUrl,
    size,
}) => {
    const newContainerStyle = _.merge(defaultContainerStyle, size)
    const newStyle = _.merge(defaultStyle, {
        width: size.width - 10,
        height: size.height - 10,
    })
    const imgStyle = size.height > size.width
        ? {
            width: size.width,
            marginTop: -1 * size.height / 3,
            zIndex: 2,
        } : {
            height: size.height,
            marginLeft: -1 * size.width / 3,
            zIndex: 2,
        }
    return (
        <div
            style={newContainerStyle}
        >
            <div
                style={newStyle}
            >
                <Img
                    src={imageUrl}
                    style={imgStyle}
                    container={chil => (
                        <HoverImg className='imageHoverZoom' >
                            {chil}
                        </HoverImg>
                    )}
                />
            </div>
        </div>
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
        width: 190,
        height: 190,
    }
}

export default Avatar
