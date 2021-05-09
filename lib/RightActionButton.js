import React from 'react'
import { StyleSheet, Animated, I18nManager, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

const AnimButton = Animated.createAnimatedComponent(RectButton)

export const RightActionProps = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.element,
    style: PropTypes.object,
    width: PropTypes.number,
    labelColor: PropTypes.string,
    labelStyle: PropTypes.object,
}

RightActionButton.defaultProps = {
    label: '',
    color: 'transparent',
    onPress: undefined,
    children: undefined,
    style: {},
    width: 75,
    labelColor: '#fff',
    labelStyle: {},
}

export default function RightActionButton({
    label,
    onPress,
    color,
    children,
    width,
    labelColor,
    labelStyle,
    style,
    dragX,
    progress,
    index,
}) {
    const scale = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1],
        extrapolate: 'clamp',
    })

    const translateX = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [60 * index, 0],
    })

    const animatedWrapperStyles = { transform: [{ scale: scale }] }
    const labelStyles = [styles.actionText, { color: labelColor }, labelStyle]
    const buttonStyles = [
        styles.rightAction,
        {
            backgroundColor: color,
            width,
            transform: [{ translateX }],
        },
        style,
    ]

    return (
        <AnimButton style={buttonStyles} onPress={onPress}>
            <Animated.View style={animatedWrapperStyles}>
                {children || <Text style={labelStyles}>{label}</Text>}
            </Animated.View>
        </AnimButton>
    )
}

const styles = StyleSheet.create({
    rightAction: {
        flexDirection: I18nManager.isRTL ? 'column-reverse' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
    },
    actionText: {
        textAlign: 'center',
        fontSize: 16,
    },
})
