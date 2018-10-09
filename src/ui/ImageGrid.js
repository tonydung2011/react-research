import React from 'react'
import StackGrid, {
    transitions,
} from 'react-stack-grid'
import posed from 'react-pose'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import {
    colors,
    styles,
} from '@internal/styles'

const HoverDim = posed.div({
    hoverable: true,
    init: {
        backgroundColor: colors.transparent,
        opacity: 0,
    },
    hover: {
        backgroundColor: colors.dim,
        opacity: 1,
    }
})

const ImageGrid = ({
    data,
    columnWidth,
    filter,
    classes,
}) => {
    const renderItem = item => (
        <div
            key={item.id}
            style={{
                width: columnWidth,
                height: columnWidth
            }}
        >
            <img
                src={item.img}
                width={columnWidth}
                height={columnWidth}
            />
            <HoverDim
                className={classes.overlayItem}
                style={{
                    width: columnWidth,
                    height: columnWidth
                }}
            >
                <Grid
                    container
                    alignItems='center'
                    justify='center'
                    className={classes.fullContainer}
                >
                    <Grid item>
                        <Typography
                            variant='subheading'
                            className={classes.itemTitle}
                            align='center'
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant='body1'
                            className={classes.itemDescription}
                            align='center'
                        >
                            {item.description}
                        </Typography>
                    </Grid>
                </Grid>
            </HoverDim>
        </div>
    )

    return (
        <StackGrid
            columnWidth={columnWidth}
            appear={transitions.scaleUp.appear}
            appeared={transitions.scaleUp.appeared}
            enter={transitions.scaleUp.enter}
            entered={transitions.scaleUp.entered}
            leaved={transitions.scaleDown.leaved}
            appearDelay={300}
        >
            {filter(data).map(item => renderItem(item))}
        </StackGrid>
    )
}

ImageGrid.propTypes = {
    data: PropTypes.array.isRequired,
    columnWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    filter: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles.ui.imageGrid)(ImageGrid)
