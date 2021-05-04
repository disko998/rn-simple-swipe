import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Swipeable from '../Swipeable';

const App = () => {
  return (
    <SafeAreaView>
      <Swipeable />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
