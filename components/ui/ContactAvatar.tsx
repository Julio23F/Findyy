import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

interface ContactAvatarProps {
  name: string;
  image?: string;
  online?: boolean;
  size?: number;
}

export default function ContactAvatar({ 
  name, 
  image, 
  online = false,
  size = 40
}: ContactAvatarProps) {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const textStyle = {
    fontSize: size * 0.4,
  };

  const indicatorSize = size * 0.3;
  const indicatorStyle = {
    width: indicatorSize,
    height: indicatorSize,
    borderRadius: indicatorSize / 2,
    borderWidth: indicatorSize * 0.2,
  };

  return (
    <View style={[styles.container, avatarStyle]}>
      {image ? (
        <Image 
          source={{ uri: image }} 
          style={[styles.image, avatarStyle]} 
        />
      ) : (
        <View style={[styles.initialsContainer, avatarStyle, { backgroundColor: colors.primary }]}>
          <Text style={[styles.initialsText, textStyle]}>{initials}</Text>
        </View>
      )}
      
      {online !== undefined && (
        <View 
          style={[
            styles.onlineIndicator, 
            indicatorStyle,
            { backgroundColor: online ? colors.green : colors.red }
          ]} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    backgroundColor: '#e0e0e0',
  },
  initialsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: 'white',
  },
});