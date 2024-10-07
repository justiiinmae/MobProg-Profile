import React from 'react';
import { Image, StyleSheet, View, Text, ImageBackground } from 'react-native';

const Avatar = ({ isDarkMode }) => { 
  return (
    <ImageBackground 
      source={require('../../assets/background.jpg')} 
      style={[styles.container, isDarkMode && styles.darkContainer]}
      resizeMode="cover" 
    >
      <View style={styles.content}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.image}
        />
        <View style={styles.joinedContainer}>
          <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Justin Mae De La Pena</Text> 
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, isDarkMode && styles.darkText]}>Joined 1 month ago</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250, 
    marginBottom: 20,
  },
  darkContainer: {
   
  },
  content: {
    alignItems: 'center', 
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 10, 
    borderColor: '#E0E0E0',  
    borderWidth: 2,         
  },
  joinedContainer: {
    alignItems: 'center', 
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',  
  },
  darkText: {
    color: 'white', 
  },
  statusContainer: { 
  },
  statusText: {
    fontSize: 14,
    color: 'white',  
  },
});

export default Avatar;
