import React from 'react';
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Avatar = ({ isDarkMode, toggleSwitch }) => { 
  return (
    <ImageBackground 
      source={require('../../../assets/background.jpg')} 
      style={[styles.containers, isDarkMode && styles.darkContainer]}
      resizeMode="cover" 
    >
      <View style={styles.content}>
        <Image
          source={require('../../../assets/profile.png')}
          style={styles.image}
        />
        <View style={styles.joinedContainer}>
          <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Justin Mae De La Pena</Text> 
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, isDarkMode && styles.darkText]}>Joined 1 month ago</Text>
          </View>
        </View>
      </View>

<View style={[styles.container, isDarkMode && styles.darkContainer]}>

<View style={[styles.groupContainer, isDarkMode ? styles.darkGroup : styles.lightGroup]}>
<TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
<Icon name="location" size={20} color={isDarkMode ? "white" : "gray"} />
<Text style={[styles.item, isDarkMode && styles.darkText]}>My Address</Text>
<Icon name="chevron-forward-outline" size={20} color={isDarkMode ? "white" : "gray"} />
</TouchableOpacity>

<TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
<Icon name="person" size={20} color={isDarkMode ? "white" : "gray"} />
<Text style={[styles.item, isDarkMode && styles.darkText]}>Account</Text>
<Icon name="chevron-forward-outline" size={20} color={isDarkMode ? "white" : "gray"} />
</TouchableOpacity>
</View>

<View style={[styles.groupContainer, isDarkMode ? styles.darkGroup : styles.lightGroup]}>        
<TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
<Icon name="notifications" size={20} color={isDarkMode ? "white" : "gray"} />
<Text style={[styles.item, isDarkMode && styles.darkText]}>Notifications</Text>
<Icon name="chevron-forward-outline" size={20} color={isDarkMode ? "white" : "gray"} />
</TouchableOpacity>

<TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
<Icon name="key" size={20} color={isDarkMode ? "white" : "gray"} />
<Text style={[styles.item, isDarkMode && styles.darkText]}>Passwords</Text>
<Icon name="chevron-forward-outline" size={20} color={isDarkMode ? "white" : "gray"} />
</TouchableOpacity>

<TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
<Icon name="language" size={20} color={isDarkMode ? "white" : "gray"} />
<Text style={[styles.item, isDarkMode && styles.darkText]}>Language</Text>
<Icon name="chevron-forward-outline" size={20} color={isDarkMode ? "white" : "gray"} />
</TouchableOpacity>
</View>

<View style={[styles.groupContainer, isDarkMode ? styles.darkGroup : styles.lightGroup]}>
<View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
<Icon name="moon-outline" size={20} color={isDarkMode ? "white" : "gray"} />
<Text style={[styles.item, isDarkMode && styles.darkText]}>Dark Mode</Text>
<Switch
trackColor={{ false: "#767577", true: "#81C784" }}
thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
onValueChange={toggleSwitch}
value={isDarkMode}
/>
</View>
</View>
</View>
</ImageBackground>


  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    width: '120%',
    height: 250,
    right: 30,  
    marginBottom: 115,
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
    top: 140,       
  },
  joinedContainer: {
    alignItems: 'center', 
    top: 140,
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
    color: 'gray',  
  },
  container: {
    width: '90%',
    maxHeight: 500,
    borderRadius: 10,
    marginTop: 100,
    marginBottom: -20,
    alignSelf: 'center',
    backgroundColor: 'transparent', 
    padding: 25,
    right: 5,
  },
  darkContainer: {
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  groupContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 15, 
    elevation: 5, 
  },
  darkGroup: {
    backgroundColor: '#2C2C2E', 
  },
  lightGroup: {
    backgroundColor: '#FFFFFF', 
  },
  groupHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5, 
    paddingVertical: 5, 
    borderRadius: 10,
    marginVertical: 6, 
  },
  lightRow: {
    backgroundColor: '#FFFFFF',
  },
  darkRow: {
    backgroundColor: '#2C2C2E',
  },
  darkText: {
    color: '#FFFFFF',
  },
  item: {
    fontSize: 14,
    color: '#263238',
    flex: 1,
    marginLeft: 10,
  },
});


export default Avatar;
