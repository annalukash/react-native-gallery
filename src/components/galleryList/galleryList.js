import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import WithGalleryServices from "../../hoc/withGalleryServices";
import { connect } from "react-redux";
import { galleryRequested, galleryLoaded, galleryError } from "../../../actions/action";

const GalleryList = ({
    gallery,
    loading,
    galleryRequested,
    galleryLoaded,
    GalleryService,
    navigation,
}) => {

    const getGalleryList = () => {
        GalleryService.getGalleryList()
            .then((response) => response && galleryLoaded(response))
    };

    useEffect(() => {
        galleryRequested();
        getGalleryList();
    }, []);


    if (loading) {
        return (
            <ActivityIndicator
                style={styles.spinner}
            />
        )
    } else {
        return (
            <ScrollView>
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                    <Item gallery={gallery} navigation={navigation} />
                </View>
            </ScrollView>
        )
    }
};

const Item = ({ gallery, navigation }) => {
    const galleryItems = gallery.map((item, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={index === 0 ? styles.borderTop : styles.container}
                onPress={() => navigation.navigate("Details", {
                    itemId: item.id,
                    url: item.urls.full,
                })}
            >
                <Image source={{ uri: item.urls.thumb }} style={styles.img} />
                <View style={styles.nameWrapper}>
                    <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.photoName}>
                        {item.description}
                    </Text>
                    <Text style={styles.photoAuthor}>{item.user.name}</Text>
                </View>
            </TouchableOpacity>
        );
    });

    return galleryItems;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomColor: "rgb(227, 227, 227)",
        borderBottomWidth: 1,
        alignItems: "center",
        paddingVertical: 10,
    },
    borderTop: {
        borderTopWidth: 1,
        borderColor: "rgb(227, 227, 227)",
        borderBottomWidth: 1,
        paddingVertical: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    img: {
        height: 100,
        width: 100,
    },
    nameWrapper: {
        width: "70%",
        paddingLeft: 15,
    },
    photoName: {
        fontWeight: "700",
        fontSize: 18,
    },
    photoAuthor: {
        fontStyle: "italic",
    },
    spinner: {
        marginTop: 20
    }
});

const mapStateToProps = (state) => {
    const { gallery, loading } = state;
    return {
        gallery,
        loading,
    };
};

const mapDispatchToProps = {
    galleryRequested,
    galleryLoaded,
};

export default WithGalleryServices()(connect(mapStateToProps, mapDispatchToProps)(GalleryList));
