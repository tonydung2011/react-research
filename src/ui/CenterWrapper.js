import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

const CenterWrapper = ({
    children,
    justify,
    align,
    className,
}) => (
    <Grid
        container
        justify={justify}
        alignItems={align}
        className={className}
    >
        <Grid item>
            {children}
        </Grid>
    </Grid>
)

CenterWrapper.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.any,
    justify: PropTypes.oneOf([
        'center', 'flex-start', 'flex-end',
    ]),
    align: PropTypes.oneOf([
        'center', 'flex-start', 'flex-end',
    ]),
}

CenterWrapper.defaultProps = {
    justify: 'center',
    align: 'center',
}

export default CenterWrapper
