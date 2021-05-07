import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Alert,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swipeable from '../lib';

import data from './MOCK_DATA.json';

const App = () => {
  return (
    <SafeAreaView style={styles.safeStyle}>
      <FlatList
        data={data}
        extraData={item => item.id}
        renderItem={({item}) => <ListItem {...item} />}
      />
    </SafeAreaView>
  );
};

const ListItem = ({first_name, last_name, email}) => {
  const rightActions = [
    {
      label: 'Add',
      color: '#8daef0',
      onPress: () => Alert.alert(`Add ${first_name}`),
      children: <FontAwesome name="plus" size={30} color="#fff" />,
      width: 80,
    },
    {
      label: 'Remove',
      color: '#f07067',
      onPress: () => Alert.alert(`Remove ${first_name}`),
      children: <FontAwesome name="trash-o" size={30} color="#fff" />,
      width: 80,
    },
  ];

  return (
    <View style={styles.container}>
      <Swipeable rightActions={rightActions} leftAction={{label: 'Remove'}}>
        <View style={styles.item}>
          <Text>{`${first_name} ${last_name}`}</Text>
          <Text>{email}</Text>
        </View>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  container: {
    marginVertical: 5,
  },
  item: {
    padding: 10,
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
});

export default App;
