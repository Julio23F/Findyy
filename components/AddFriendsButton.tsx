import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Share, UserPlus } from 'lucide-react-native';

export default function AddFriendsButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
        <UserPlus size={20} color="#4A9EF7" />
        <Text style={styles.addButtonText}>AJOUTER DES AMIS</Text>
      </TouchableOpacity>
      
      <Pressable style={styles.shareButton}>
        <Share size={20} color="#4A9EF7" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  addButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#4A9EF7',
    marginLeft: 8,
  },
  shareButton: {
    backgroundColor: 'white',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
});