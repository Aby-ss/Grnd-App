import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RadialSlider } from 'react-native-radial-slider';
import { router } from 'expo-router';

export default function HomeScreen() {

  return (
    <View style={styles.scrollContainer}>
      {/* Profile Area */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/profile-picture.png')} // Replace with your own image path
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>Good Morning, Rao</Text>
        <Text style={styles.subheader}>Tuesday 3 December, 2024</Text>
      </View>

      <View style={styles.focusmetricContainer}>
        <Text style={styles.focusHeader}>Focus Profile</Text>
        <Text style={styles.focusSubheader}>Complete longer sessions to increase your focus profile 🔥</Text>

        
      </View>
    </View>
  );
}

// Styles for various components
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the ScrollView adapts to its content
    backgroundColor: '#E9E9E9', // Light gray background color
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
  headerText: {
    fontSize: 25, // Large font size for the header text
    fontWeight: 'bold', // Bold text
    color: '#333', // Dark gray text color
    marginTop: -65, // Adjust positioning
    marginLeft: 38,
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
    borderWidth: 5,
    borderColor: '#59CC1B',
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
  focusmetricContainer: {
    marginBottom: 16, // Spacing below each section
    padding: 16,
    marginTop: 35,
  },
  focusHeader: {
    fontSize: 25, // Large font size for the header text
    fontWeight: '800', // Bold text
    color: '#333', // Dark gray text color
    marginTop: 5, // Adjust positioning
    marginLeft: 80,
    letterSpacing: -0.5,
  },
  focusSubheader: {
    fontSize: 15, // Large font size for the header text
    fontWeight: '600', // Bold text
    color: '#7C7C7C', // Dark gray text color
    marginTop: 3, // Adjust positioning
    marginLeft: 61,
    width: 200,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
});
