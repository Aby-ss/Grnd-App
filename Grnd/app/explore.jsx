import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.scrollContainer}>
      {/* Header Section with Duration left + Motivational Quote */}
      <Text style={[styles.headerText, styles.durationLeft]}>Duration Left : 1 hr 20 mins</Text>
      <Text style={[styles.subText, styles.motivationalQuote]}>
        "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all." —Dale Carnegie
      </Text>

      <View style={styles.durationContainer}>
        <Text style={[styles.subText, styles.progressHeader]}>75% Progress</Text>
        <View style={styles.completedProgress}></View>
        <View style={styles.durationProgress}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the ScrollView adapts to its content
    backgroundColor: '#E9E9E9', // Light gray background color
    padding: 16, // Padding around the edges
  },
  header: {
    alignItems: 'center', // Center the header content horizontally
    marginBottom: 8, // Spacing below the header
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 75,
    marginTop: 65,
    marginRight: 285,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777777',
  },
  motivationalQuote: {
    position: 'absolute',
    top: 150,
    left: 40,
    right: 0,
    width: 300,
    textAlign: 'center',
  },
  progressHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    position: 'absolute',
    top: 10,
    left: 20,
    right: 0,
  },
  durationLeft: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  durationContainer: {
    width: 350,
    height: 100,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    position: 'absolute',
    top: 270,
    alignSelf: 'center', // Centers it horizontally in the parent
    borderWidth: 2,
    borderColor: '#BABABA',
  },
  durationProgress: {
    width: 320,
    height: 45,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    position: 'absolute',
    top: 40,
    alignSelf: 'center', // Centers it horizontally in the parent
  },
  completedProgress: {
    width: 320,
    height: 45,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    alignSelf: 'center', // Centers it horizontally in the parent
  },
});
