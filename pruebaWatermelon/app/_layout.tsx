import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Inicio", 
        tabBarIcon: ({size, color}) => <MaterialIcons name="account-balance-wallet" size={24} color="green" /> }} />


      <Tabs.Screen name="cuentas" options={{ title: "Cuentas", 
        tabBarIcon: ({size, color}) => <MaterialIcons name="account-tree" size={24} color="red" /> }} />
    </Tabs>
  );
}
