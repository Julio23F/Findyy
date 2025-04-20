import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Avatar from './Avatar';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type ProfileHeaderProps = {
  name: string;
  username: string;
  memberSince: string;
};

export default function ProfileHeader({ name, username, memberSince }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/pdp.jpg')}
        style={styles.avatar}
        resizeMode="cover"
      />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>{username} · {memberSince}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  profileInfo: {
    // alignItems: 'center',
    // paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#333',
    marginTop: 16,
  },
  username: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  avatar: {
    width: screenWidth,
    height: screenHeight/4,
    marginBottom: 16,
  },
});
