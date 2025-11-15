import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // evita que se oculte el splash screen de forma predeterminada
    setTimeout(() => {
      SplashScreen.hideAsync(); // oculta después de 2s
    }, 4000);
  }, []);

  return (
      <LinearGradient
        colors={["#c5cdddff", "#5c88c9ff", "#0130ffff"]} // colores del gradiente
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ color: "white", textAlign: "center", marginHorizontal: 20 }}>
          Aquí puedes agregar un componente de React (o el que creaste en clase anterior)
        </Text>
      </LinearGradient>
    );
}
