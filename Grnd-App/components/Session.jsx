// Session.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function Session() {
  const { taskName: initialTaskName = "No Title", speed: initialSpeed = "0" } = useLocalSearchParams();
  const { duration } = useLocalSearchParams();
  const durationInMinutes = parseInt(duration) || 0;

  const [timeLeft, setTimeLeft] = useState(durationInMinutes * 60);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true); // State to control timer activity
  const [taskName, setTaskName] = useState(initialTaskName); // State for task name
  const [speed, setSpeed] = useState(initialSpeed); // State for speed

  useEffect(() => {
    if (!timerRunning) return; // Exit if the timer is stopped

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRunning]); // Rerun effect when timerRunning changes

  const resetSession = () => {
    setTimerRunning(false); // Stop the timer
    setShowConfetti(false); // Hide confetti
    setTimeLeft(0 * 60); // Reset timeLeft to initial duration
    setTaskName("No Title"); // Reset task name
    setSpeed("0"); // Reset speed
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hrs ${minutes} mins`;
  };

  const calculateProgress = () => {
    const totalSeconds = durationInMinutes * 60;
    const progress = Math.round(((totalSeconds - timeLeft) / totalSeconds) * 100);

    // Ensure progress is 0 when timer is reset
    if (!timerRunning) return 0;

    return isNaN(progress) ? 0 : progress;
  };

  useEffect(() => {
    if (timerRunning && calculateProgress() === 100) {
      setShowConfetti(true); // Trigger confetti only during normal progression
    }
  }, [timeLeft, timerRunning]);

  return (
    <View style={styles.scrollContainer}>
      <Text style={[styles.headerText, styles.durationLeft]}>
        Duration Left : {formatTime(timeLeft)}
      </Text>
      <Text style={[styles.subText, styles.motivationalQuote]}>
        "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all." —Dale Carnegie
      </Text>

      <Text style={[styles.sessionDetails_Title]}>Session Title : {taskName}</Text>
      <Text style={styles.sessionDetails_Duration}>Duration : {speed} mins</Text>
      <View style={styles.progressContainer}>
        {/* Background progress bar */}
        <View style={styles.progressBackground}>
          {/* Animated progress fill */}
          <View 
            style={[
              styles.progressFill, 
              { 
                width: `${calculateProgress()}%`,
              }
            ]} 
          />
        </View>
        {/* Progress text overlay */}
        <Text style={styles.progressText}>{calculateProgress()}% Complete</Text>
      </View>

      <TouchableOpacity style={[styles.button, styles.whiteButton]}>
        <Text style={[styles.btn_text, styles.blackText]} onPress={resetSession}>Cancel Timer</Text>
      </TouchableOpacity>

      {/* Confetti Cannon */}
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: 0, y: 0 }}
          fadeOut={true} // Automatically fades out
        />
      )}
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
    letterSpacing: -0.5,
  },
  subText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777777',
    letterSpacing: -0.5,
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
  sessionDetails_Title: {
    position: 'absolute',
    top: 270,
    left: 30,
    fontSize: 18,
    fontWeight: '700',
    color: '#262626',
    letterSpacing: -0.6,
  },
  sessionDetails_Duration: {
    position: 'absolute',
    top: 290,
    left: 30,
    fontSize: 18,
    fontWeight: '700',
    color: '#262626',
    letterSpacing: -0.6,
  },
  progressContainer: {
    position: 'absolute',
    top: 320,
    left: 20,
    right: 20,
    height: 60,
    zIndex: 10, // This ensures it overlaps elements beneath it
  },
  progressBackground: {
    width: '100%',
    height: 45,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    overflow: 'hidden', // This ensures the fill doesn't exceed the container
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#36d424',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  progressText: {
    position: 'absolute',
    top: 12,
    left: 20,
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    zIndex: 11, // This ensures text is always visible above the progress bar
  },
  button: {
    position: 'absolute',
    top: 380,
    left: 120,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
});
