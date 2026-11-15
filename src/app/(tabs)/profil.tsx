import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tabStyles } from '@/styles/tabStyles';

export default function ProfilScreen() {
  const handleLogout = () => {
    Alert.alert('Konfirmasi', 'Apakah Anda yakin ingin keluar dari aplikasi?', [
      {
        text: 'Batal',
        style: 'cancel',
      },
      {
        text: 'Keluar',
        style: 'destructive',
        onPress: () => {
          // Hapus sesi login jika ada (AsyncStorage, Context, dll)
          // Di sini kita langsung redirect ke login
          router.replace('/login');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={tabStyles.container} edges={['top']}>
      <View style={tabStyles.profileContainer}>
        <View style={tabStyles.profileCard}>
          {/* Profile Icon */}
          <View style={tabStyles.profileIconContainer}>
            <Ionicons name="person" size={50} color="#2563EB" />
          </View>

          {/* Profile Info */}
          <Text style={tabStyles.profileTitle}>Profil Pengguna</Text>
          <Text style={tabStyles.profileSubtitle}>Informasi akun aktif</Text>

          {/* Logout Button */}
          <TouchableOpacity style={tabStyles.logoutButton} onPress={handleLogout}>
            <Text style={tabStyles.logoutButtonText}>Keluar dari Akun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
