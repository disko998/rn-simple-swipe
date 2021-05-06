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
import Swipeable from '../Swipeable';

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
      key: 'Add',
      color: '#8daef0',
      onPress: () => Alert.alert(`Add ${first_name}`),
      children: <FontAwesome name="user" size={30} color="#fff" />,
    },
    {
      key: 'Remove',
      color: '#f07067',
      onPress: () => Alert.alert(`Remove ${first_name}`),
      children: <FontAwesome name="trash-o" size={30} color="#fff" />,
    },
  ];

  return (
    <View style={{marginVertical: 5}}>
      <Swipeable rightActions={rightActions}>
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
