import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { colors } from '@/constants/colors';

interface ContactMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  contact: {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
  };
}

export default function ContactMarker({ coordinate, contact }: ContactMarkerProps) {
  return (
    <Marker coordinate={coordinate}>
      <View style={styles.container}>
        <View style={[styles.markerContainer, { backgroundColor: colors.purple }]}>
          <Image
            source={{ uri: contact.avatar }}
            style={styles.avatar}
          />
          <View style={[
            styles.onlineIndicator, 
            { backgroundColor: contact.online ? colors.green : colors.red }
          ]} />
        </View>
        <View style={[styles.triangle, { borderTopColor: colors.purple }]} />
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  markerContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 2,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '180deg' }],
    marginTop: -2,
  },
});