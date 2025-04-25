import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import { MapPin, Coffee, ShoppingBag, Hotel } from 'lucide-react-native';
import { colors } from '@/constants/colors';

interface PlaceMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  type: 'hotel' | 'restaurant' | 'shop' | 'other';
}

export default function PlaceMarker({ coordinate, type }: PlaceMarkerProps) {
  const getMarkerColor = () => {
    switch (type) {
      case 'hotel': return colors.purple;
      case 'restaurant': return colors.orange;
      case 'shop': return colors.blue;
      default: return colors.primary;
    }
  };

  const getMarkerIcon = () => {
    switch (type) {
      case 'hotel': return <Hotel size={16} color="#fff" />;
      case 'restaurant': return <Coffee size={16} color="#fff" />;
      case 'shop': return <ShoppingBag size={16} color="#fff" />;
      default: return <MapPin size={16} color="#fff" />;
    }
  };

  const color = getMarkerColor();
  const icon = getMarkerIcon();

  return (
    <Marker coordinate={coordinate}>
      <View style={styles.container}>
        <View style={[styles.markerContainer, { backgroundColor: color }]}>
          {icon}
        </View>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  markerContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});