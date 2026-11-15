import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tabStyles } from '@/styles/tabStyles';

interface Product {
  id: number;
  name: string;
  stock: number;
  unit: string;
  price: number;
  icon: string;
  color: string;
}

export default function ProdukScreen() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Minyak Goreng 2L',
      stock: 45,
      unit: 'pcs',
      price: 38000,
      icon: 'water',
      color: '#FEF3C7',
    },
    {
      id: 2,
      name: 'Beras Premium 5kg',
      stock: 18,
      unit: 'karung',
      price: 72500,
      icon: 'nutrition',
      color: '#FEE2E2',
    },
    {
      id: 3,
      name: 'Gula Pasir 1kg',
      stock: 30,
      unit: 'pcs',
      price: 17500,
      icon: 'cube',
      color: '#E0E7FF',
    },
    {
      id: 4,
      name: 'Tepung Terigu 1kg',
      stock: 25,
      unit: 'pcs',
      price: 15000,
      icon: 'bag',
      color: '#DBEAFE',
    },
    {
      id: 5,
      name: 'Susu Bubuk 400g',
      stock: 40,
      unit: 'pcs',
      price: 42000,
      icon: 'cafe',
      color: '#D1FAE5',
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
          <Text style={tabStyles.headerTitle}>Katalog Produk</Text>
          <Text style={tabStyles.headerSubtitle}>Inventaris Barang Toko</Text>
        </View>

        {/* Product List */}
        {products.map((product) => (
          <View key={product.id} style={tabStyles.productCard}>
            <View style={[tabStyles.productIconContainer, { backgroundColor: product.color }]}>
              <Ionicons name={product.icon as any} size={28} color="#1E293B" />
            </View>
            <View style={tabStyles.productInfo}>
              <Text style={tabStyles.productName}>{product.name}</Text>
              <Text style={tabStyles.productStock}>
                Stok: {product.stock} {product.unit}
              </Text>
              <Text style={tabStyles.productPrice}>{formatCurrency(product.price)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
