import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import GalleryList from "./src/components/galleryList/galleryList";
import GalleryDetails from "./src/components/galleryDetails/galleryDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Provider} from 'react-redux';
import GalleryServicesContext from './src/galleryContext/galleryContext';
import store from './src/store/store';
import GalleryServices from './src/services/services';

const Stack = createStackNavigator();
const galleryServices = new GalleryServices();

export default function App() {
    return (
        <Provider store={store}>
				<GalleryServicesContext.Provider value={galleryServices}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Gallery">
                            <Stack.Screen name="Gallery" component={GalleryList} />
                            <Stack.Screen name="Details" component={GalleryDetails} />
                        </Stack.Navigator>
                    </NavigationContainer>
				</GalleryServicesContext.Provider>
		</Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
});
