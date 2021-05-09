import React from 'react'
import { default as SwipeGesture } from 'react-native-gesture-handler/Swipeable'
import PropTypes from 'prop-types'

import RightActionButton, { RightActionProps } from './RightActionButton'
import LeftActionButton, { LeftActionProps } from './LeftActionButton'

Swipeable.propTypes = {
    rightActions: PropTypes.arrayOf(PropTypes.shape(RightActionProps)),
    leftAction: PropTypes.shape(LeftActionProps),
}

Swipeable.defaultProps = {
    rightActions: [],
    leftAction: {},
}

export default function Swipeable({
    children,
    rightActions,
    leftAction,
    ...swipeableProps
}) {
    const renderRightActions = (progress, dragX) => {
        return rightActions.map((item, index) => (
            <RightActionButton
                key={item.key || index}
                progress={progress}
                dragX={dragX}
                index={index + 1}
                {...item}
            />
        ))
    }

    const renderLeftActions = (progress, dragX) => {
        return (
            <LeftActionButton
                dragX={dragX}
                progress={progress}
                {...leftAction}
            />
        )
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
