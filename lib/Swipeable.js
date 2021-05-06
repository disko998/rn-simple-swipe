import React from 'react'
import { StyleSheet, Animated, I18nManager, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { default as SwipeGesture } from 'react-native-gesture-handler/Swipeable'
import PropTypes from 'prop-types'

Swipeable.propTypes = {
    rightActions: PropTypes.arrayOf(RightActionsType),
}

Swipeable.defaultProps = {
    rightActions: [],
}

const RightActionsType = PropTypes.shape({
    key: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.element,
})

export default function Swipeable({ children, rightActions }) {
    return (
        <SwipeGesture
            renderRightActions={(progress, dragX) => (
                <RightActions
                    progress={progress}
                    dragX={dragX}
                    data={rightActions}
                />
            )}
            renderLeftActions={(progress, dragX) => (
                <LeftActions progress={progress} dragX={dragX} />
            )}
        >
            {children}
        </SwipeGesture>
    )
}

const RightActions = ({ progress, dragX, data }) => {
    const scale = dragX.interpolate({
        inputRange: [-70 * data.length, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    })

    return data.map(({ key, onPress, color, children }, index) => (
        <RectButton
            key={key || index}
            style={[styles.rightAction, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Animated.View style={{ transform: [{ scale }] }}>
                {children || <Text style={[styles.actionText]}>{key}</Text>}
            </Animated.View>
        </RectButton>
    ))
}

RightActions.propTypes = {
    data: PropTypes.arrayOf(RightActionsType),
}

const LeftActions = ({ progress, dragX }) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    })

    return (
        <RectButton
            onPress={() => Alert.alert('Remove')}
            style={styles.leftAction}
        >
            <Animated.Text
                style={[
                    styles.actionText,
                    { transform: [{ scale }], textAlign: 'left' },
                ]}
            >
                Remove
            </Animated.Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    rightAction: {
        flexDirection: I18nManager.isRTL ? 'column-reverse' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
    },
    leftAction: {
        flex: 1,
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        // flexDirection: I18nManager.isRTL ? 'column-reverse' : 'column',
        // alignItems: 'center',
    },
    actionText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    },
})
