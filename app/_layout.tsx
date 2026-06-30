import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { supabase } from '../lib/supabase';
import type { Session } from '@supabase/supabase-js';

export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if a session already exists when the app opens
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for login/logout events
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return null; // Show nothing while checking session

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {session ? (
        // Logged in → go to main app tabs
        <Stack.Screen name="(tabs)" />
      ) : (
        // Not logged in → go to auth screens
        <Stack.Screen name="(auth)" />
      )}
    </Stack>
  );
} 