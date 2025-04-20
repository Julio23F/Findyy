import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileStats from '@/components/ProfileStats';
import AddFriendsButton from '@/components/AddFriendsButton';
import UserSummary from '@/components/UserSummary';
import BadgesSection from '@/components/BadgesSection';
import { Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* <View style={styles.settingsContainer}>
        <Settings size={24} color="#666" />
      </View> */}
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProfileHeader
            name="julio FARALAHY"
            username="@julioFARAL"
            memberSince="Membre depuis octobre 2024"
          />
          
          <ProfileStats
            courses={29}
            subscriptions={9}
            subscribers={9}
          />
          
          <View style={styles.actionButtons}>
            <AddFriendsButton />
          </View>
          
          <UserSummary
            streakDays={0}
            xpPoints={27470}
            division="Or"
            languageScore={18}
            languageCode="us"
          />
          
          <BadgesSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  settingsContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
});