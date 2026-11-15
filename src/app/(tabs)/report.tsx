import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tabStyles } from '@/styles/tabStyles';

interface StatsData {
  id: number;
  label: string;
  value: string;
  icon: string;
  color: string;
  iconColor: string;
}

export default function ReportScreen() {
  const stats: StatsData[] = [
    {
      id: 1,
      label: 'Omset Hari Ini',
      value: 'Rp1.850.000',
      icon: 'cash',
      color: '#DBEAFE',
      iconColor: '#2563EB',
    },
    {
      id: 2,
      label: 'Total Nota',
      value: '24 Transaksi',
      icon: 'receipt',
      color: '#D1FAE5',
      iconColor: '#10B981',
    },
    {
      id: 3,
      label: 'Produk Terjual',
      value: '156 Item',
      icon: 'cube',
      color: '#FEF3C7',
      iconColor: '#F59E0B',
    },
    {
      id: 4,
      label: 'Rata-rata Nota',
      value: 'Rp77.083',
      icon: 'trending-up',
      color: '#E9D5FF',
      iconColor: '#A855F7',
    },
  ];

  return (
    <SafeAreaView style={tabStyles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={tabStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tabStyles.header}>
          <Text style={tabStyles.headerTitle}>Laporan Toko</Text>
          <Text style={tabStyles.headerSubtitle}>Ringkasan Penjualan Hari Ini</Text>
        </View>

        {/* Stats Grid */}
        <View style={tabStyles.statsGrid}>
          {stats.map((stat) => (
            <View key={stat.id} style={tabStyles.statsCard}>
              <View style={[tabStyles.statsIconContainer, { backgroundColor: stat.color }]}>
                <Ionicons name={stat.icon as any} size={26} color={stat.iconColor} />
              </View>
              <Text style={tabStyles.statsLabel}>{stat.label}</Text>
              <Text style={tabStyles.statsValue}>{stat.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
