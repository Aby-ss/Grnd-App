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

      <View style={styles.section}>
      <Image
          source={require('@/assets/images/background.jpg')} // Replace with your own image path
          style={styles.sectionImage}
        />
        <Text style={styles.paragraph}>
          “If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat.” {"\n"}
          <Text style={styles.bold}>― Sun Tzu, The Art of War</Text>
        </Text>
      </View>
    </View>
  );
}

// Styles for various components
export const styles = StyleSheet.create({
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
    borderColor: '#2074fa',
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
  section: {
    backgroundColor: '#d1cfcf', // Light gray background for sections
    marginBottom: 16, // Spacing below each section
    padding: 16,
    marginTop: 35,
    borderRadius: 5,
    minHeight: 500,
  },
  sectionImage: {

  },
});
