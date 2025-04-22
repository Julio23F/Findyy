import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Flag } from 'lucide-react-native';

type ProfileStatsProps = {
  courses: number;
  subscriptions: number;
  subscribers: number;
};

export default function ProfileStats({ courses, subscriptions, subscribers }: ProfileStatsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <View style={styles.flagContainer}>
          {/*  */}
        </View>
        <Text style={styles.statLabel}>Cours</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statItem}>
        <Text style={styles.statValue}>{subscriptions}</Text>
        <Text style={styles.statLabel}>Abonnements</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statItem}>
        <Text style={styles.statValue}>{subscribers}</Text>
        <Text style={styles.statLabel}>Abonnés</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  statItem: {
    // alignItems: 'left',
    // flex: 1,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#333',
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  divider: {
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  flagContainer: {
    width: 32,
    height: 24,
    backgroundColor: '#E0363A',
    borderRadius: 2,
    marginBottom: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  flag: {
    position: 'absolute',
  },
  flagStripes: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  stripe: {
    height: 3.5,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 3.5,
  },
});