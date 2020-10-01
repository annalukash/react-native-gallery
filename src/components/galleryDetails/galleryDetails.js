import React, {useState, useEffect} from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

const GalleryDetails = ({route}) => {
    const [loading, setLoading] = useState(true);
    const { url } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
            <ActivityIndicator animating={loading} style={styles.spinner}/>
            <Image source={{ uri: url }} style={{ flex: 1}} onLoadEnd={(e)  => setLoading(false)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    spinner: {
        position: 'absolute',
        alignSelf: 'center'
    }
})


export default GalleryDetails;