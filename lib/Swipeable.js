import React from 'react'
import {
    View,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Text,
    I18nManager,
    Alert,
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { default as SwipeGesture } from 'react-native-gesture-handler/Swipeable'
import PropTypes from 'prop-types'

export default function Swipeable({ children }) {
    return (
        <SwipeGesture
            renderRightActions={(progress, dragX) => (
                <RightActions progress={progress} dragX={dragX} />
            )}
            renderLeftActions={(progress, dragX) => (
                <LeftActions progress={progress} dragX={dragX} />
            )}
        >
            {children}
        </SwipeGesture>
    )
}

const RightActions = ({ progress, dragX }) => {
    const scale = dragX.interpolate({
        inputRange: [-80, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    })

    return (
        <>
            <RectButton style={styles.rightAction}>
                <Animated.Text
                    style={[
                        styles.actionText,
                        {
                            transform: [{ scale }],
                        },
                    ]}
                >
                    <Text>Text</Text>
                </Animated.Text>
            </RectButton>
        </>
    )
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
                style={[styles.actionText, { transform: [{ scale }] }]}
            >
                Remove
            </Animated.Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    rightAction: {
        backgroundColor: '#dd2c00',
        justifyContent: 'center',

        // flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    leftAction: {
        flex: 1,
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        // flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        // alignItems: 'center',
    },
    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: 20,
    },
})
