import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {
    RadialChart,
} from 'react-vis'
import pose from 'react-pose'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
    colors,
} from '@internal/styles'

const ChartHoverWrapper = pose.div({
    hoverable: true,
    init: {
        backgroundColor: colors.primary,
    },
    hover: {
        backgroundColor: colors.secondaryHighlight,
    }
})

const ChartSkillItemContainer = pose.div({
    hoverable: true,
})

const HoverText = pose.h4({
    hoverable: true,
    init: {
        color: colors.dark,
    },
    hover: {
        color: colors.secondaryHighlight,
    }
})

const HoverSkillChart = ({
    skill,
    classes
}) => (
    <Grid
            item
            xs={12}
            sm={6}
            md={3}
        >
            <ChartSkillItemContainer className='pad15'>
                <ChartHoverWrapper className={classes.chartSkillWrapper}>
                    <RadialChart
                        data={skill.chart}
                        width={200}
                        height={200}
                        innerRadius={80}
                        radius={90}
                        colorType='literal'
                    />
                </ChartHoverWrapper>
                <Typography variant='subheading' align='center' className={classnames(classes.centerNumber)}>
                    {skill.number}
                </Typography>
                <HoverText className={classes.skillTitle}>
                    {skill.title}
                </HoverText>
                <Typography variant='body2' align='center'>
                    {skill.description}
                </Typography>
            </ChartSkillItemContainer>
        </Grid>
)

HoverSkillChart.propTypes = {
    skill: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

export default HoverSkillChart
