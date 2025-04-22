import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Chrome as Home, Trophy, Dumbbell, Award, CircleUser as UserCircle, MoveHorizontal as MoreHorizontal } from 'lucide-react-native';

export default function BadgesSection() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Badges mensuels</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>AFFICHER TOUT</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.badgesContainer}>
        <View style={styles.badgeRow}>
          <BadgeIcon Icon={Home} color="#FF8A65" />
          <BadgeIcon Icon={Trophy} color="#FFB74D" />
          <BadgeIcon Icon={Dumbbell} color="#64B5F6" />
          <BadgeIcon Icon={Award} color="#FFD54F" active />
          <BadgeIcon Icon={UserCircle} color="#BA68C8" />
          <BadgeIcon Icon={MoreHorizontal} color="#9E9E9E" />
        </View>
      </View>
    </View>
  );
}

type BadgeIconProps = {
  Icon: React.ComponentType<any>;
  color: string;
  active?: boolean;
};

function BadgeIcon({ Icon, color, active = false }: BadgeIconProps) {
  return (
    <View style={[styles.badgeIconContainer, active && styles.activeBadge]}>
      <Icon size={24} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#333',
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#0ea9f9',
  },
  badgesContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 1.41,
    // elevation: 1,
    borderWidth: 2,
    borderColor: '#e8e8e8',
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badgeIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  activeBadge: {
    borderWidth: 2,
    borderColor: '#0ea9f9',
    backgroundColor: 'white',
  },
});