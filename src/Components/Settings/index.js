  import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';

  const SettingsCard = ({ isDarkMode, toggleSwitch }) => {
    return (
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
            <Icon name="phone-portrait" size={20} color={isDarkMode ? "white" : "gray"} />
            <Text style={[styles.item, isDarkMode && styles.darkText]}>Devices</Text>
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
    );
  };

  const styles = StyleSheet.create({
    container: {
      width: '90%',
      maxHeight: 500,
      borderRadius: 10,
      marginTop: -20,
      marginBottom: 20,
      alignSelf: 'center',
      backgroundColor: 'transparent', 
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
      paddingHorizontal: 10, 
      paddingVertical: 10, 
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

  export default SettingsCard;
