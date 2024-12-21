import React from 'react';
import { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native';

// Main component that represents the home screen
export default function HomeScreen() {
    const [taskName, settaskName] = useState("");
  return (
    // Container for the entire screen with ScrollView for scrolling
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Hero Section text/headers */}
      <View style={styles.header}>
        <Text style={styles.timer_headerText}>Choose Duration</Text>
        <Text style={styles.timer_subheader}>Start a session on December 20</Text>
      </View>

      {/* Session Title input section */}
      <Text style={styles.inputsec_headerText}>Session Title</Text>
      <TextInput
                placeholder="Building the next big thing ..."
                value={taskName}
                onChangeText={(text) => settaskName(text)}
                style={styles.input}
            />
      <Text style={styles.inputsec_subText}>Fun Fact : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
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
    width: 70,
    height: 70, 
    borderRadius: 75, 
    marginTop: 65,
    marginRight: 285,
  },
  inputsec_headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    position: 'absolute',
    top: 520,
    left: 0,
    right: 210,
    textAlign: 'center',
  },
  inputsec_subText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    position: 'absolute',
    top: 610,
    left: 10,
    right: 0,
    width: 350,
    textAlign: 'center',
  },
  timer_headerText: {
    fontSize: 35,
    fontWeight: '700',
    color: '#333',
    position: 'absolute',
    top: 135,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  timer_subheader: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
    position: 'absolute',
    top: 180,
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
  input: {
    backgroundColor: "#fff",
    padding: 10,
    width: "85%",
    marginTop: 510,
    marginLeft: 20,
    color: "#000",
    borderBottomWidth: 2, // Thickness of the bottom border
    borderBottomColor: "#000", // Black color for the bottom border
  },
});
