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

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Validasi input
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    // Validasi password
    if (password.length < 6) {
      Alert.alert('Error', 'Password minimal 6 karakter');
      return;
    }

    // Validasi konfirmasi password
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan konfirmasi password tidak cocok');
      return;
    }

    // Simulasi register berhasil
    // Di aplikasi nyata, simpan data ke backend/database
    Alert.alert('Berhasil', 'Registrasi berhasil! Silakan login.', [
      {
        text: 'OK',
        onPress: () => {
          router.replace('/login');
        },
      },
    ]);
  };

  const goToLogin = () => {
    router.back();
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
            <Ionicons name="person-add" size={60} color="#2563EB" />
            <Text style={authStyles.title}>Daftar</Text>
            <Text style={authStyles.subtitle}>
              Buat akun baru untuk memulai menggunakan aplikasi
            </Text>
          </View>

          {/* Form Card */}
          <View style={authStyles.formCard}>
            {/* Name Input */}
            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Nama Lengkap</Text>
              <TextInput
                style={[authStyles.input, nameFocused && authStyles.inputFocused]}
                placeholder="Masukkan nama lengkap"
                placeholderTextColor="#94A3B8"
                value={name}
                onChangeText={setName}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                autoCapitalize="words"
              />
            </View>

            {/* Email Input */}
            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Email</Text>
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
                  placeholder="Minimal 6 karakter"
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

            {/* Confirm Password Input */}
            <View style={authStyles.inputContainer}>
              <Text style={authStyles.label}>Konfirmasi Password</Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={[
                    authStyles.input,
                    confirmPasswordFocused && authStyles.inputFocused,
                    { paddingRight: 50 },
                  ]}
                  placeholder="Ulangi password"
                  placeholderTextColor="#94A3B8"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  onFocus={() => setConfirmPasswordFocused(true)}
                  onBlur={() => setConfirmPasswordFocused(false)}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: 15,
                    top: 14,
                  }}>
                  <Ionicons
                    name={showConfirmPassword ? 'eye-off' : 'eye'}
                    size={22}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Register Button */}
            <TouchableOpacity style={authStyles.button} onPress={handleRegister}>
              <Text style={authStyles.buttonText}>Daftar</Text>
            </TouchableOpacity>
          </View>

          {/* Link to Login */}
          <View style={authStyles.linkContainer}>
            <Text style={authStyles.linkText}>Sudah punya akun?</Text>
            <TouchableOpacity onPress={goToLogin}>
              <Text style={authStyles.linkButton}>Masuk sekarang</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
