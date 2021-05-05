import {StyleSheet, SafeAreaView, FlatList, View, Text} from 'react-native';
import React from 'react';
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
  return (
    <View style={{marginVertical: 5}}>
      <Swipeable>
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
