import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [fromDate, setFromDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 1)),
  );
  const [toDate, setToDate] = useState(new Date());

  const OS = Platform.OS;

  const [showFromDate, setFromShow] = useState(OS == 'ios');

  const [showToDate, setToShow] = useState(OS == 'ios');

  const updateFromDate = (event, date) => {
    if (OS != 'ios') {
      setFromShow(false);
    }
    setFromDate(date);
  };

  const updateToDate = (event, date) => {
    if (OS != 'ios') {
      setToShow(false);
    }
    setToDate(date);
  };

  const calcDate = () => {
    // const res = toDate.setHours(0) - fromDate.setHours(0);
    const res = toDate - fromDate;
    return res;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              {OS == 'ios' ? (
                <Text>Change start date</Text>
              ) : (
                <Button
                  title="Press me to start Date"
                  color="#f194ff"
                  onPress={() => setFromShow(true)}
                />
              )}
              {showFromDate ? (
                <DateTimePicker
                  value={fromDate}
                  display="default"
                  onChange={updateFromDate}
                />
              ) : null}
            </View>
            <View style={styles.sectionContainer}>
              {OS == 'ios' ? (
                <Text>Change last date</Text>
              ) : (
                <Button
                  title="Press me to finish Date"
                  color="#ccc"
                  onPress={() => setToShow(true)}
                />
              )}
              {showToDate ? (
                <DateTimePicker
                  value={toDate}
                  display="default"
                  onChange={updateToDate}
                />
              ) : null}
            </View>
            <View style={styles.sectionContainer}>
              <Text>
                this date is {Math.round(calcDate() / (1000 * 3600 * 24))}
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
