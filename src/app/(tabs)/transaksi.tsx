import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tabStyles } from '@/styles/tabStyles';

interface Transaction {
  id: string;
  items: number;
  time: string;
  amount: number;
}

export default function TransaksiScreen() {
  const transactions: Transaction[] = [
    {
      id: 'TRX-001',
      items: 3,
      time: '10:15 WIB',
      amount: 128000,
    },
    {
      id: 'TRX-002',
      items: 5,
      time: '11:02 WIB',
      amount: 214500,
    },
    {
      id: 'TRX-003',
      items: 2,
      time: '11:30 WIB',
      amount: 95000,
    },
    {
      id: 'TRX-004',
      items: 7,
      time: '12:15 WIB',
      amount: 342000,
    },
    {
      id: 'TRX-005',
      items: 4,
      time: '13:45 WIB',
      amount: 187500,
    },
  ];

  const formatCurrency = (amount: number): string => {
    return `Rp${amount.toLocaleString('id-ID')}`;
  };

  return (
    <SafeAreaView style={tabStyles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={tabStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tabStyles.header}>
          <Text style={tabStyles.headerTitle}>Transaksi Berjalan</Text>
          <Text style={tabStyles.headerSubtitle}>Kasir & Keranjang Belanja</Text>
        </View>

        {/* Transaction List */}
        {transactions.map((transaction) => (
          <View key={transaction.id} style={tabStyles.transactionCard}>
            <View style={tabStyles.transactionHeader}>
              <View style={tabStyles.transactionIconContainer}>
                <Ionicons name="cart" size={24} color="#2563EB" />
              </View>
              <View style={tabStyles.transactionInfo}>
                <Text style={tabStyles.transactionId}>{transaction.id}</Text>
                <Text style={tabStyles.transactionItems}>{transaction.items} Item Belanja</Text>
              </View>
            </View>
            <View style={tabStyles.transactionFooter}>
              <Text style={tabStyles.transactionTime}>{transaction.time}</Text>
              <Text style={tabStyles.transactionAmount}>{formatCurrency(transaction.amount)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
