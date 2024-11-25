import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Reports</Text>
            <Text style={styles.statValue}>24</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Users</Text>
            <Text style={styles.statValue}>180</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Actions</Text>
            <Text style={styles.statValue}>35</Text>
          </View>
        </View>

        <View style={styles.navCardsContainer}>
          <TouchableOpacity style={styles.navCard}>
            <Text style={styles.navCardText}>View Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  statTitle: {
    fontSize: 16,
    color: '#888',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  navCardsContainer: {
    marginTop: 10,
  },
  navCard: {
    backgroundColor: '#6200ea',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  navCardText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
