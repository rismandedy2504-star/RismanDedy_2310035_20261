import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { homeStyles } from '@/styles/homeStyles';

export default function HomeScreen() {
  // Simulasi mendapatkan email user yang login
  // Di aplikasi nyata, ambil dari context/state management atau AsyncStorage
  const userEmail = 'user@marketplace.com';

  const menuItems = [
    {
      id: 1,
      title: 'Produk',
      subtitle: 'Katalog',
      icon: 'cube',
      color: '#DBEAFE',
      iconColor: '#2563EB',
      action: () => router.push('/(tabs)/produk'),
    },
    {
      id: 2,
      title: 'Pelanggan',
      subtitle: 'Data',
      icon: 'people',
      color: '#FEE2E2',
      iconColor: '#EF4444',
      action: () =>
        Alert.alert('Info', 'Fitur Pelanggan akan dikembangkan pada modul berikutnya'),
    },
    {
      id: 3,
      title: 'Supplier',
      subtitle: 'Pemasok',
      icon: 'business',
      color: '#FEF3C7',
      iconColor: '#F59E0B',
      action: () =>
        Alert.alert('Info', 'Fitur Supplier akan dikembangkan pada modul berikutnya'),
    },
    {
      id: 4,
      title: 'Barang Masuk',
      subtitle: 'Stok In',
      icon: 'download',
      color: '#D1FAE5',
      iconColor: '#10B981',
      action: () =>
        Alert.alert('Info', 'Fitur Barang Masuk akan dikembangkan pada modul berikutnya'),
    },
    {
      id: 5,
      title: 'Barang Keluar',
      subtitle: 'Stok Out',
      icon: 'share',
      color: '#E9D5FF',
      iconColor: '#A855F7',
      action: () =>
        Alert.alert('Info', 'Fitur Barang Keluar akan dikembangkan pada modul berikutnya'),
    },
  ];

  return (
    <SafeAreaView style={homeStyles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={homeStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Kartu Sambutan */}
        <View style={homeStyles.welcomeCard}>
          <Text style={homeStyles.welcomeStatus}>✓ Berhasil Masuk</Text>
          <Text style={homeStyles.welcomeTitle}>Halo, Selamat Datang!</Text>
          <Text style={homeStyles.welcomeEmail}>{userEmail}</Text>
        </View>

        {/* Menu Cepat Marketplace */}
        <Text style={homeStyles.sectionTitle}>Menu Cepat</Text>
        <View style={homeStyles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={homeStyles.menuItem}
              onPress={item.action}
              activeOpacity={0.7}>
              <View style={[homeStyles.menuIconContainer, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon as any} size={28} color={item.iconColor} />
              </View>
              <Text style={homeStyles.menuText}>{item.title}</Text>
              <Text style={homeStyles.menuSubtext}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
