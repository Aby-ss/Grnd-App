import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Main component that represents the home screen
export default function HomeScreen() {
  return (
    // Container for the entire screen with ScrollView for scrolling
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header section with an image */}
      <View style={styles.header}>
        <Text style={styles.timer_headerText}>Choose Duration</Text>
        <Text style={styles.timer_subheader}>Start a session on December 20</Text>
      </View>
    </ScrollView>
  );
}

// Styles for various components
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the ScrollView adapts to its content
    backgroundColor: '#f5f5f5', // Light gray background color
    padding: 16, // Padding around the edges
  },
  header: {
    alignItems: 'center', // Center the header content horizontally
    marginBottom: 22, // Spacing below the header
  },
  headerImage: {
    width: 70, // Width of the image
    height: 70, // Height of the image
    borderRadius: 75, // Makes the image circular
    marginTop: 65,
    marginRight: 285,
  },
  timer_headerText: {
    fontSize: 35,
    fontWeight: '700',
    color: '#333',
    position: 'absolute',
    top: 155,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  timer_subheader: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  quotesHeading: {
    fontSize: 21, // Large font size for the header text
    fontWeight: 'bold', // Bold text
    color: '#333', // Dark gray text color
    marginTop: 15, // Adjust positioning
    marginLeft: 10,
  },
  section: {
    backgroundColor: '#d1cfcf', // Light gray background for sections
    marginBottom: 16, // Spacing below each section
    padding: 16,
    marginTop: 15,
    borderRadius: 5,
  },
  paragraph: {
    fontSize: 16, // Normal font size for paragraphs
    color: '#666', // Lighter gray color
    lineHeight: 22, // Better line spacing for readability
  },
  bold: {
    fontWeight: 'bold', // Bold text for emphasis
    color: '#000', // Black text for emphasis
  },
});
