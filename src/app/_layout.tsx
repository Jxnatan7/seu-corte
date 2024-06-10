import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
          statusBarTranslucent: true,
          headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
      <Stack.Screen name="(auth)" options={{}} />
    </Stack>
  );
}
