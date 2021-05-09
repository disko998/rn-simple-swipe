import React from 'react'
import { StyleSheet, Animated, I18nManager, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export const LeftActionProps = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.element,
    style: PropTypes.object,
    labelColor: PropTypes.string,
    labelStyle: PropTypes.object,
    icon: PropTypes.element,
}

LeftActionButton.defaultProps = {
    label: '',
    color: '#388e3c',
    onPress: undefined,
    children: undefined,
    style: {},
    labelColor: '#fff',
    labelStyle: {},
    icon: undefined,
}

export default function LeftActionButton({
    label,
    onPress,
    color,
    children,
    labelColor,
    labelStyle,
    style,
    dragX,
    progress,
    icon,
}) {
    const scale = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0.7, 1],
        extrapolate: 'clamp',
    })

    const animatedWrapperStyles = [
        styles.animatedWrapper,
        { transform: [{ scale }] },
    ]
    const labelStyles = [styles.actionText, { color: labelColor }, labelStyle]
    const buttonStyles = [styles.leftAction, { backgroundColor: color }, style]

    return (
        <RectButton onPress={onPress} style={buttonStyles}>
            <Animated.View style={animatedWrapperStyles}>
                {children || (
                    <>
                        <View style={styles.iconWrapper}>{icon}</View>
                        <Text style={labelStyles}>{label}</Text>
                    </>
                )}
            </Animated.View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        padding: 10,
    },
    animatedWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        flex: 1,
    },
    actionText: {
        textAlign: 'left',
        fontSize: 16,
    },
    iconWrapper: {
        padding: 10,
    },
})
