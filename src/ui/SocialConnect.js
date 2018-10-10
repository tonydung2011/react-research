import React from 'react'
import Img from 'react-image'
import pose from 'react-pose'
import PropTypes from 'prop-types'
import {
    colors
} from '@internal/styles'
import { AppConfig } from '@internal/constants'

const SocialConnect = ({
    provider,
}) => {
    let CircleWrapper
    let Icon
    let link
    switch (provider) {
        case 'facebook':
            CircleWrapper = pose.div({
                hoverable: true,
                init: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.transparent,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
                hover: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.facebook,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
            })
            Icon = require('@internal/assets/facebook.png') /* eslint-disable-line */
            link = AppConfig.link.facebook
            break
        case 'gmail':
            CircleWrapper = pose.div({
                hoverable: true,
                init: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.transparent,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
                hover: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.gmail,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
            })
            Icon = require('@internal/assets/gmail.png') /* eslint-disable-line */
            link = AppConfig.link.gmail
            break
        case 'linkedin':
            CircleWrapper = pose.div({
                hoverable: true,
                init: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.transparent,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
                hover: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.likedin,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
            })
            Icon = require('@internal/assets/linkedin.png') /* eslint-disable-line */
            link = AppConfig.link.linkedin
            break
        default:
            CircleWrapper = pose.div({
                hoverable: true,
                init: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.transparent,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
                hover: {
                    border: '1px solid white',
                    borderRadius: '50%',
                    backgroundColor: colors.facebook,
                    width: 40,
                    height: 40,
                    padding: 10,
                },
            })
            Icon = require('@internal/assets/facebook.png') /* eslint-disable-line */
            link = AppConfig.link.facebook
    }
    return (
        <div className='flex' >
            <a href={link} >
                <CircleWrapper>
                    <Img src={Icon} style={{ width: 20, height: 20 }} />
                </CircleWrapper>
            </a>
        </div>
    )
}

SocialConnect.propTypes = {
    provider: PropTypes.string,
}

export default SocialConnect
