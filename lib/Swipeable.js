import React from 'react'
import { default as SwipeGesture } from 'react-native-gesture-handler/Swipeable'
import PropTypes from 'prop-types'

import RightActionButton, { RightActionProps } from './RightActionButton'
import LeftActionButton, { LeftActionProps } from './LeftActionButton'

Swipeable.propTypes = {
    rightActions: PropTypes.arrayOf(PropTypes.shape(RightActionProps)),
    leftAction: PropTypes.shape(LeftActionProps),
    swipeableProps: PropTypes.object,
}

Swipeable.defaultProps = {
    rightActions: [],
    leftAction: {},
    swipeableProps: {},
}

export default function Swipeable({
    children,
    rightActions,
    leftAction,
    ...swipeableProps
}) {
    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-70 * rightActions.length, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })

        return rightActions.map((item, index) => (
            <RightActionButton
                key={item.key || index}
                scale={scale}
                {...item}
            />
        ))
    }

    const renderLeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })

        return <LeftActionButton {...leftAction} scale={scale} />
    }

    return (
        <SwipeGesture
            renderRightActions={renderRightActions}
            renderLeftActions={renderLeftActions}
            {...swipeableProps}
        >
            {children}
        </SwipeGesture>
    )
}
