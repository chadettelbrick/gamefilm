import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';

export default function WelcomeScreen() {
  const router = useRouter();

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Error signing in:', error.message);
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrap}>
        <View style={styles.logoMark}>
          <Text style={styles.logoIcon}>🎬</Text>
        </View>
        <Text style={styles.logoText}>GameFilm</Text>
        <Text style={styles.tagline}>Your team. Your film. Your playbook.</Text>
      </View>

      {/* Role selector */}
      <View style={styles.roles}>
        <Text style={styles.rolesLabel}>I am a...</Text>
        <View style={styles.roleRow}>
          <TouchableOpacity style={styles.roleCard}>
            <Text style={styles.roleEmoji}>🏆</Text>
            <Text style={styles.roleName}>Coach</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roleCard}>
            <Text style={styles.roleEmoji}>⚽</Text>
            <Text style={styles.roleName}>Player</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roleCard}>
            <Text style={styles.roleEmoji}>❤️</Text>
            <Text style={styles.roleName}>Parent</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign in button */}
      <TouchableOpacity style={styles.googleBtn} onPress={signInWithGoogle}>
        <Text style={styles.googleBtnText}>Sign in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.fine}>
        By signing in you agree to our Terms of Service and Privacy Policy.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoMark: {
    width: 72,
    height: 72,
    borderRadius: 18,
    backgroundColor: '#185FA5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoIcon: {
    fontSize: 36,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#0C1B2E',
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  roles: {
    width: '100%',
    marginBottom: 32,
  },
  rolesLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 12,
  },
  roleRow: {
    flexDirection: 'row',
    gap: 10,
  },
  roleCard: {
    flex: 1,
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
  },
  roleEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  roleName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151',
  },
  googleBtn: {
    width: '100%',
    backgroundColor: '#185FA5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  googleBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  fine: {
    fontSize: 11,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 16,
  },
});