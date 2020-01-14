import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const [show, setShow] = useState(true);

  const updateFromDate = (event, date) => {
    setFromDate(date);
  };

  const updateToDate = (event, date) => {
    setToDate(date);
  };

  const calcDate = () => {
    const dateNow = new Date().setHours(0);
    const myDate = fromDate - dateNow;
    return myDate;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text>Start</Text>
              <DateTimePicker
                value={fromDate}
                display="default"
                onChange={updateFromDate}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text>To</Text>
              <DateTimePicker
                value={toDate}
                display="default"
                onChange={updateToDate}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text>
                this date is {Math.ceil(calcDate() / (1000 * 3600 * 24))}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
