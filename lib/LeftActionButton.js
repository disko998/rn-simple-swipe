import React from 'react'
import { StyleSheet, Animated, I18nManager, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export const LeftActionProps = {
    label: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.element,
    style: PropTypes.object,
    textColor: PropTypes.string,
    textStyle: PropTypes.object,
}

LeftActionButton.defaultProps = {
    label: '',
    color: '#388e3c',
    onPress: undefined,
    children: undefined,
    style: {},
    textColor: '#fff',
    textStyle: {},
}

export default function LeftActionButton({
    label,
    onPress,
    color,
    children,
    textColor,
    textStyle,
    style,
    scale,
}) {
    return (
        <RectButton
            onPress={onPress}
            style={[
                { ...styles.leftAction, ...style },
                { backgroundColor: color },
            ]}
        >
            <Animated.View style={{ transform: [{ scale }] }}>
                {children || (
                    <Text
                        style={[
                            { ...styles.actionText, ...textStyle },
                            { color: textColor },
                        ]}
                    >
                        {label}
                    </Text>
                )}
            </Animated.View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#388e3c',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    actionText: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 15,
    },
})
