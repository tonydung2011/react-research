import React from 'react'
import Img from 'react-image'
import pose from 'react-pose'
import PropTypes from 'prop-types'
import {
    colors
} from '@internal/styles'
import { AppConfig } from '@internal/constants';

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
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.white,
                    width: 40,
                    hieght: 40,
                },
                hover: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.facebook,
                    width: 40,
                    hieght: 40,
                },
            })
            Icon = require('@internal/assets/facebook.png') /* eslint-disable-line */
            link = AppConfig.link.facebook
            break
        case 'gmail':
            CircleWrapper = pose.div({
                hoverable: true,
                init: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.white,
                    width: 40,
                    hieght: 40,
                },
                hover: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.facebook,
                    width: 40,
                    hieght: 40,
                },
            })
            Icon = require('@internal/assets/gmail.png') /* eslint-disable-line */
            link = AppConfig.link.gmail
            break
        case 'linkedin':
            CircleWrapper = pose.div({
                hoverable: true,
                init: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.white,
                    width: 40,
                    hieght: 40,
                },
                hover: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.facebook,
                    width: 40,
                    hieght: 40,
                },
            })
            Icon = require('@internal/assets/linkedin.png') /* eslint-disable-line */
            link = AppConfig.link.linkedin
            break
        default:
            CircleWrapper = pose.div({
                hoverable: true,
                init: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.white,
                    width: 40,
                    hieght: 40,
                },
                hover: {
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    borderWidth: 2,
                    borderRadius: '50%',
                    borderColor: colors.facebook,
                    width: 40,
                    hieght: 40,
                },
            })
            Icon = require('@internal/assets/facebook.png') /* eslint-disable-line */
            link = AppConfig.link.facebook
    }
    return (
        <CircleWrapper>
            <a href={link} >
                <Img src={Icon} style={{ width: 30, height: 30 }} />
            </a>
        </CircleWrapper>
    )
}

SocialConnect.propTypes = {
    provider: PropTypes.string,
}

export default SocialConnect
