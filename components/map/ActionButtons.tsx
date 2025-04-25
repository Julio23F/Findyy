import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Mic, Bell, CircleCheck as CheckCircle } from 'lucide-react-native';
import { colors } from '@/constants/colors';

export default function ActionButtons() {
  return (
    <View style={styles.container}>
      <ActionButton 
        icon={<Mic size={24} color={colors.textPrimary} />}
        title="Écouter le son environnant"
        subtitle="< 10 minutes les minutes s'écoulent"
      />
      <ActionButton 
        icon={<Bell size={24} color={colors.textPrimary} />}
        title="Klaxonner"
        subtitle="Signal sonore"
      />
      <ActionButton 
        icon={<CheckCircle size={24} color={colors.textPrimary} />}
        title="Vérifier"
        subtitle="Dans les jeux et les réseaux sociaux"
      />
    </View>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function ActionButton({ icon, title, subtitle }: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    width: '31%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});