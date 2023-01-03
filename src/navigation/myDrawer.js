import { createDrawerNavigator } from "@react-navigation/drawer";
import { Main } from "../screens/main/main";
import { WebPage } from "../screens/webpage/webpage";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen
        name="home"
        component={Main}
        option={{ headerShow: true }}
      />
      <Drawer.Screen name="webPage" component={WebPage} />
    </Drawer.Navigator>
  );
}

export { MyDrawer };
