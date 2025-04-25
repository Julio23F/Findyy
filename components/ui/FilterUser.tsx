import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { TriangleAlert as AlertTriangle, SlidersHorizontal, ChevronDown, Info, CircleCheck as CheckCircle } from 'lucide-react-native';
import { colors } from '@/constants/colors';

interface FilterUserProps {
  userName: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onDismiss?: () => void;
}

export default function FilterUser({ 
  userName, 
  type = 'info', 
  duration = 0, 
  onDismiss 
}: FilterUserProps) {
  const [isVisible, setIsVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    if (duration > 0) {
      const timer = setTimeout(() => {
        dismissFilterUser();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, []);

  const dismissFilterUser = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
      if (onDismiss) onDismiss();
    });
  };

  if (!isVisible) return null;

  return (
    <Animated.View 
      style={[
        styles.container, 
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
        }
      ]}
    >
      <View style={styles.iconContainer}>
        <SlidersHorizontal size={20} color={colors.blue} />
      </View>
      <Text style={styles.userName}>{userName}</Text>
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={dismissFilterUser}
      >
        <ChevronDown size={16} color={colors.textSecondary} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 16,
    right: 76,
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 12,
  },
  userName: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textPrimary,
  },
  closeButton: {
    padding: 4,
  },
});