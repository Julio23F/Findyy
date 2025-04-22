import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Share, UserPlus } from 'lucide-react-native';

export default function AddFriendsButton() {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.addButton} activeOpacity={0.8}> </TouchableOpacity>*/}
      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <UserPlus size={20} color="#0ea9f9" strokeWidth={3} />
        <Text style={styles.addButtonText}>AJOUTER DES AMIS</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.shareButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Share size={20} color="#0ea9f9" strokeWidth={3} />
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
    marginRight: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1.41,
    elevation: 2,

    borderWidth: 1,
    borderColor: '#f9f9f9',
  },
  addButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#0ea9f9',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  shareButton: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 3,

    borderWidth: 1,
    borderColor: '#f9f9f9',
  },
  buttonPressed: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    elevation: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#0ea9f9',
    transform: [{ translateY: 2 }],
  },
});
