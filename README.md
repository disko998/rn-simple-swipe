# rn-simple-swipe [![npm version](https://badge.fury.io/js/rn-simple-swipe.svg)](https://badge.fury.io/js/rn-simple-swipe)

Easy to use swipeable component for React Native built on top of [react-native-gesture-handler/Swipeable](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable/), support both iOS and Android.

<img src="./demo.gif" width="310">

## Installation

1. First [install](https://docs.swmansion.com/react-native-gesture-handler/docs/) `react-native-gesture-handler`

2. Add `rn-simple-swipe` to your project:

```sh
npm i --save react-native-swipeable
```

or

```sh
yarn add rn-simple-swipe
```

## Usage

Check out [full example](https://github.com/disko998/rn-simple-swipe/blob/master/example/src/App.js)

```javascript
import Swipeable from 'rn-simple-swipe'

const SwipeableComponent = () => {
    const rightActions = [
        {
            label: 'Add',
            color: '#8daef0',
            onPress: () => Alert.alert(`Add ${first_name}`),
            children: <FontAwesome name='plus' size={30} color='#fff' />,
        },
        {
            label: 'Remove',
            color: '#f07067',
            onPress: () => Alert.alert(`Remove ${first_name}`),
            children: <FontAwesome name='trash-o' size={30} color='#fff' />,
        },
    ]

    const leftAction = {
        label: 'Boo',
        onPress: () => alert('Boo'),
        icon: <FontAwesome name='snapchat-ghost' size={30} color='#fff' />,
    }

    return (
        <Swipeable rightActions={rightActions} leftAction={leftAction}>
            <View style={styles.item}>
                <Text>My Swipeable component</Text>
            </View>
        </Swipeable>
    )
}
```

## Props

| prop           | type                      | default | description                      |
| -------------- | ------------------------- | ------- | -------------------------------- |
| `rightActions` | Array [RightActionsProps] | `[]`    | Right swipe action buttons props |
| `leftAction`   | Object {LeftActionProps}  | `{}`    | Left swipe button props          |

</br>

### RightActionsProps

| prop         | type    | default       | required | description                                                           |
| ------------ | ------- | ------------- | -------- | --------------------------------------------------------------------- |
| `label`      | String  | `''`          | true     | Text label for the action button                                      |
| `color`      | String  | `transparent` | false    | Action button background color                                        |
| `width`      | Number  | `75`          | false    | Action button width                                                   |
| `style`      | Object  | `{}`          | false    | Additional action button style                                        |
| `onPress`    | Fun     | `undefined`   | false    | On action button press callback                                       |
| `children`   | Element | `undefined`   | false    | Custom action button children (you can render icon here for instance) |
| `labelColor` | String  | `#fff`        | false    | Label text color                                                      |
| `labelStyle` | Object  | `{}`          | false    | Label text style                                                      |

```js
   {
	label: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.element,
    style: PropTypes.object,
    width: PropTypes.number,
    labelColor: PropTypes.string,
    labelStyle: PropTypes.object,
   }
```

</br>

### LeftActionProps

| prop         | type    | default       | required | description                           |
| ------------ | ------- | ------------- | -------- | ------------------------------------- |
| `label`      | String  | `''`          | true     | Text label for the action button      |
| `color`      | String  | `transparent` | false    | Button background color               |
| `icon`       | Element | `undefined`   | false    | Icon that will be render before label |
| `style`      | Object  | `{}`          | false    | Additional button style               |
| `onPress`    | Fun     | `undefined`   | false    | On button press callback              |
| `children`   | Element | `undefined`   | false    | Custom children                       |
| `labelColor` | String  | `#fff`        | false    | Label text color                      |
| `labelStyle` | Object  | `{}`          | false    | Label text style                      |

```js
   {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.element,
    style: PropTypes.object,
    labelColor: PropTypes.string,
    labelStyle: PropTypes.object,
    icon: PropTypes.element,
   }
```

## Example

To run [the example](https://github.com/disko998/rn-simple-swipe/blob/master/example)

```sh
npm run build
cd example
npm install
react-native run-ios # or run-android
```
