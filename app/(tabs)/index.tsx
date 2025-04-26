import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SlidersHorizontal, X } from 'lucide-react-native';

import ActionButtons from '@/components/map/ActionButtons';
import UserMarker from '@/components/map/UserMarker';
import PlaceMarker from '@/components/map/PlaceMarker';
import ContactMarker from '@/components/map/ContactMarker';
import FilterUser from '@/components/ui/FilterUser';
import { getDummyContacts, getDummyPlaces } from '@/utils/dummyData';
import { colors } from '@/constants/colors';

export default function HomeScreen() {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showFilterUser, setShowFilterUser] = useState(false);

  const contacts = getDummyContacts();
  const places = getDummyPlaces();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const initialRegion = {
    latitude: location?.coords?.latitude || -18.8792,
    longitude: location?.coords?.longitude || 47.5079,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const dismissFilterUser = () => {
    setShowFilterUser(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
        initialRegion={initialRegion}
        showsUserLocation={false}
        showsMyLocationButton={false}
        showsCompass={false}
        showsScale={true}
        rotateEnabled={true}
        scrollEnabled={true}
        zoomEnabled={true}
      >
        {location && (
          <UserMarker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        )}
        
        {contacts.map((contact) => (
          <ContactMarker
            key={contact.id}
            coordinate={contact.coordinate}
            contact={contact}
          />
        ))}
        
        {places.map((place) => (
          <PlaceMarker
            key={place.id}
            coordinate={place.coordinate}
            type={place.type}
          />
        ))}
      </MapView>

      <View style={styles.controlsContainer}>
        <TouchableOpacity 
          style={styles.controlButton} 
          onPress={() => setShowFilterUser(!showFilterUser)}
        >
        {
          showFilterUser ? (
            <X size={20} color={colors.textPrimary} />
          ) : (
            <SlidersHorizontal size={20} color={colors.textPrimary} />
          )
        }

        </TouchableOpacity>
      </View>

      <ActionButtons />
      
      {showFilterUser && (
        <FilterUser
          userName="Faralahy Julio"
          type="warning"
          onDismiss={dismissFilterUser}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  controlsContainer: {
    position: 'absolute',
    right: 16,
    top: 100,
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  controlButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#f0f0f0',
  },
});
