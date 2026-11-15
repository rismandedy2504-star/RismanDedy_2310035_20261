import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { authStyles } from '@/styles/authStyles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Validasi input
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Email dan password harus diisi');
      return;
    }

    // Validasi format email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    // Simulasi login berhasil
    // Di aplikasi nyata, lakukan verifikasi ke backend/database
    Alert.alert('Berhasil', 'Login berhasil!', [
      {
        text: 'OK',
        onPress: () => {
          // Navigasi ke halaman tabs dengan replace agar tidak bisa back ke login
          router.replace('/(tabs)/home');
        },
      },
    ]);
  };

  const goToRegister = () => {
    router.push('/register');
  };

  return (
    <SafeAreaView style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={authStyles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={authStyles.headerContainer}>
            <Ionicons name="log-in" size={60} color="#2563EB" />
            <Text style={authStyles.title}>Masuk</Text>
            <Text style={authStyles.subtitle}>
              Silakan masuk dengan akun Anda untuk melanjutkan
            </Text>
          </View>

          {/* Form Card */}
          <View style={authStyles.formCard}>
            {/* Email Input */}
            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Email</Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={[authStyles.input, emailFocused && authStyles.inputFocused]}
                  placeholder="nama@email.com"
                  placeholderTextColor="#94A3B8"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Password</Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={[
                    authStyles.input,
                    passwordFocused && authStyles.inputFocused,
                    { paddingRight: 50 },
                  ]}
                  placeholder="Masukkan password Anda"
                  placeholderTextColor="#94A3B8"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: 15,
                    top: 14,
                  }}>
                  <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={22}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={authStyles.button} onPress={handleLogin}>
              <Text style={authStyles.buttonText}>Masuk</Text>
            </TouchableOpacity>
          </View>

          {/* Link to Register */}
          <View style={authStyles.linkContainer}>
            <Text style={authStyles.linkText}>Belum punya akun?</Text>
            <TouchableOpacity onPress={goToRegister}>
              <Text style={authStyles.linkButton}>Daftar sekarang</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
