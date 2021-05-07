import React from 'react'
import { StyleSheet, Animated, I18nManager, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export const RightActionProps = {
    label: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.element,
    style: PropTypes.object,
    width: PropTypes.number,
    textColor: PropTypes.string,
    textStyle: PropTypes.object,
}

RightActionButton.defaultProps = {
    label: '',
    color: 'transparent',
    onPress: undefined,
    children: undefined,
    style: {},
    width: 75,
    textColor: '#fff',
    textStyle: {},
}

export default function RightActionButton({
    label,
    onPress,
    color,
    children,
    width,
    textColor,
    textStyle,
    style,
    scale,
}) {
    return (
        <RectButton
            style={[
                { ...styles.rightAction, style },
                { backgroundColor: color, width },
            ]}
            onPress={onPress}
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
    rightAction: {
        flexDirection: I18nManager.isRTL ? 'column-reverse' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
    },
    actionText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    },
})
