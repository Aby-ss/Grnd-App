import React from 'react';
import { useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { RadialSlider } from 'react-native-radial-slider';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

// Main component that represents the home screen
export default function HomeScreen(this: any) {
    const [taskName, settaskName] = useState("");
    const [speed, setSpeed] = useState(0);

    const gradientColors = speed < 20
    ? [
        { offset: '0%', color: '#FFFF00' }, // Yellow
        { offset: '100%', color: '#FF9900' } // Orange
      ]
    : speed < 40
    ? [
        { offset: '0%', color: '#FF9900' }, // Orange
        { offset: '100%', color: '#FF0000' } // Red
      ]
    : [
        { offset: '0%', color: '#7ED052' }, // Green Gradient Start
        { offset: '100%', color: '#9DE10E' } // Green Gradient End
      ];

      const thumbColor = speed < 20 
      ? '#FF9900' // Yellow for speed < 20
      : speed < 40 
      ? '#FF0000' // Orange for 20 <= speed < 40
      : '#36d424'; // Green for speed >= 40


  return (
    // Container for the entire screen with ScrollView for scrolling
    <View style={styles.scrollContainer}>
      <View style={styles.cancelbtn_container}>
        <TouchableOpacity style={[styles.cancelButton]}>
            <Text style={[styles.btn_text, styles.cancelText]}>Cancel</Text>
        </TouchableOpacity>
      </View>

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

      <View style={styles.sliderContainer}>

        <RadialSlider
          style={styles.circularContainer}
          variant={'radial-circle-slider'}
          value={speed}
          min={0}
          max={120}
          onChange={setSpeed}
          title='Choose a duration'
          subTitle=''
          unit='mins'
          thumbColor={thumbColor}
          markerLineSize={10}
          sliderTrackColor='#F5F5F5'
          linearGradient={gradientColors}
          isHideLines
        />
      </View>

      <View style={styles.btn_container}>
        {/* Black Button */}
        <TouchableOpacity style={[styles.button, styles.whiteButton]}>
                  <Text style={[styles.btn_text, styles.blackText]}>Start Later</Text>
        </TouchableOpacity>

        {/* White Button */}
        <TouchableOpacity style={[styles.button, styles.blackButton]}>
            <Text style={[styles.btn_text, styles.whiteText]}>Start Now</Text>
        </TouchableOpacity>
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
    marginBottom: 8, // Spacing below the header
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
    top: 505,
    left: 0,
    right: 200,
    textAlign: 'center',
  },
  inputsec_subText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    position: 'absolute',
    top: 590,
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
  sliderContainer: {
    marginTop: -335,
    alignItems: "center",
  },
  sliderValueText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  sliderInput: {
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: "50%",
    textAlign: "center",
  },
  circularContainer: {
    marginTop: 0,
    marginBottom: 100
  },
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 80,
  },
  cancelbtn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  blackButton: {
      backgroundColor: '#000',
  },
  cancelButton: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Make the position adjustable
    left: 15,
    top: 60,
  },
  whiteButton: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#000',
  },
  btn_text: {
      fontSize: 16,
      fontWeight: '700',
  },
  whiteText: {
      color: '#FFF',
  },
  blackText: {
      color: '#000',
  },
  cancelText: {
    color: '#007FC2'
  },
});
