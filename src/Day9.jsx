// Build a screen that toggles between light mode and dark mode.

import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Appearance } from 'react-native';

const Day9 = () => {
  // Detect initial system theme
  const systemScheme = Appearance.getColorScheme();

  // State to track user-selected override (true = dark, false = light, null = follow system)
  const [isDarkMode, setIsDarkMode] = useState(systemScheme === 'dark');

  // Listen to system theme changes
  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => listener.remove();
  }, []);

  // UI styles based on current theme
  const backgroundColor = isDarkMode ? '#222' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>
        Current Theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>

      <Text style={[styles.text, { color: isDarkMode ? '#aaa' : '#555' }]}>
        Toggle to switch theme manually
      </Text>

      <Switch
        value={isDarkMode}
        onValueChange={(val) => setIsDarkMode(val)}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
      />
    </View>
  );
};

export default Day9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
});
