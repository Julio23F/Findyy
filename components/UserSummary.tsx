import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Flame, Zap, Trophy, Flag } from 'lucide-react-native';

type UserSummaryProps = {
  streakDays: number;
  xpPoints: number;
  division: string;
  languageScore: number;
  languageCode: string;
};

export default function UserSummary({ streakDays, xpPoints, division, languageScore, languageCode }: UserSummaryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Récap</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Flame size={24} color="#E0E0E0" style={styles.iconStats}/>
          <View style={styles.statsDescription}>
            <Text style={styles.statValue}>{streakDays}</Text>
            <Text style={styles.statLabel}>Jour d'activité</Text>
          </View>
        </View>
        
        <View style={styles.statCard}>
          <Zap size={24} color="#FFD700" style={styles.iconStats}/>
          <View style={[styles.statsDescription]}>
            <Text style={styles.statValue}>{xpPoints}</Text>
            <Text style={styles.statLabel}>crédits restants</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '48%',
    alignItems: "flex-start",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 1.41,
    // elevation: 1,
    display: "flex",
    flexDirection: "row",

    borderWidth: 2,
    borderColor: '#e8e8e8',
  },
  iconStats: {
    marginTop: 8
  },
  statsDescription: {
    marginLeft: 12,
    // backgroundColor: "blue"
    // width: 48,
    // height: 48,
    // borderRadius: 24,
    // backgroundColor: '#F5F5F5',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 8,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#333',
    marginVertical: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  flagContainer: {
    width: 48,
    height: 32,
    backgroundColor: '#2B67C4',
    borderRadius: 4,
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
    height: 5,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 5,
  },
});