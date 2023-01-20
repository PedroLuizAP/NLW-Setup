import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import "./src/lib/dayjs";
export default function App() {
  const [fontsLoad] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoad) return (<Loading />);

  return (
    <>
      <Home />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}