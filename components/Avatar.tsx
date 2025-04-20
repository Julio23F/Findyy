import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function Avatar() {
  // Custom avatar that resembles the one in the image
  return (
    <View style={styles.avatarContainer}>
      <Svg width={120} height={120} viewBox="0 0 120 120">
        {/* Head */}
        <Circle cx="60" cy="60" r="50" fill="#CF8B70" />
        
        {/* Hair */}
        <Path
          d="M25 35 C 25 20, 45 10, 60 10 C 75 10, 95 20, 95 35 C 95 50, 85 50, 70 50 C 55 50, 45 50, 25 35"
          fill="#333"
        />
        
        {/* Eyes */}
        <Circle cx="40" cy="45" r="10" fill="white" />
        <Circle cx="80" cy="45" r="10" fill="white" />
        <Circle cx="42" cy="48" r="5" fill="#333" />
        <Circle cx="78" cy="48" r="5" fill="#333" />
        
        {/* Nose */}
        <Path
          d="M60 55 Q 55 65, 60 70"
          stroke="#A06555"
          strokeWidth="3"
          fill="transparent"
        />
        
        {/* Mouth */}
        <Path
          d="M45 75 Q 60 85, 75 75"
          stroke="#A06555"
          strokeWidth="3"
          fill="transparent"
        />
        
        {/* Shirt */}
        <Path
          d="M25 110 L 35 85 C 40 80, 80 80, 85 85 L 95 110"
          fill="#B73863"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});