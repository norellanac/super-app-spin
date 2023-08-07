import React from "react";
import { SafeAreaView, StyleSheet, View, Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Text from "../components/Text/Text";
import Tag from "../components/atoms/Tag";
import StackedCardGrid from "../components/GridView/StackedCardGrid";
import BannerCarousel from "../components/molecules/BannerCarousel";

interface Banner {
    id: number,
    title: string,
    image: object,
    onPress: () => void,
}

const BeneficiosScreen = () => {
    const changePoints = require('../assets/change-points.png');
    const checkHistory = require('../assets/check-history.png');

    const handleCardPress = (title: string) => {
        console.log('Se hizo clic en:', title);
      };

      const banners: Banner[] = [
        {
          id: 1,
          title: 'Volaris',
          image: {
            uri: 'https://firebasestorage.googleapis.com/v0/b/femsa-af419.appspot.com/o/banner1.png?alt=media&token=ba2b6df3-1174-4618-b8a3-5f85e96038b6',
          },
          onPress: () => console.log('Banner 1'),
        },
        {
          id: 2,
          title: 'Andati',
          image: {
            uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
          },
          onPress: () => console.log('Banner 2'),
        },
        {
          id: 3,
          title: 'Volaris',
          image: {
            uri: 'https://firebasestorage.googleapis.com/v0/b/femsa-af419.appspot.com/o/banner1.png?alt=media&token=ba2b6df3-1174-4618-b8a3-5f85e96038b6',
          },
          onPress: () => console.log('Banner 3'),
        },
      ];

    return(
        <SafeAreaView style={benefitsStyles.mainContainer}>
            <ScrollView style={benefitsStyles.mainScroll} showsVerticalScrollIndicator= {false}>
                <Text variant='title-two-semibold' style={benefitsStyles.title}>Beneficios</Text>
                <View style={benefitsStyles.container}>
                    <View style={benefitsStyles.leftContent}>
                        <Text variant='subtitle-semibold' style={benefitsStyles.subtitle}>Tienes</Text>
                        <Text variant='jumbo-two' style={benefitsStyles.points}>10,657 puntos</Text>{/*Cambiar por context*/}
                        <View>
                           <Tag text="Valen $156.00" variant='points' leftIcon={require('../assets/points.png')} size='large'/> 
                        </View>
                    </View>
                    <View style={benefitsStyles.rightContent}>
                        <Image
                        source={require('../assets/Premia1.png')}
                        style={benefitsStyles.image}
                        resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={{}}>
                    <StackedCardGrid
                        data={[
                              {
                                title: 'Consulta tu historial',
                                icon: <Image source={checkHistory} style={benefitsStyles.imageGrid}/>,
                                onPress: () => handleCardPress('Consulta tu historial'),
                              },
                              {
                                title: 'Cambia tus puntos',
                                icon: <Image source={changePoints} style={benefitsStyles.imageGrid}/>,
                                onPress: () => handleCardPress('Cambia tus puntos'),
                                
                              },
                        ]}
                        titlesSize='small'
                        numberOfColumns={2}
                        containerStyle={{marginTop: 25, gap:15,}}
                    />
                </View>
                <View>
                    <Text variant='subtitle-semibold' style={benefitsStyles.subtitleSection}>Acumula productos</Text>
                    <Text variant='default-body'>Muy pronto podrás sumar tus compras y ganar productos de regalo</Text>
                    <Image 
                        source={require('../assets/acumula.png')}
                        style={benefitsStyles.imageSection}
                    />
                </View>
                <View>
                    <Text variant='subtitle-semibold' style={benefitsStyles.subtitleSection}>Gana más puntos</Text>
                    <Text variant='default-body'>Muy pronto podrás ganar más puntos en el total de tu compra</Text>
                    <Image 
                        source={require('../assets/ganamas.png')}
                        style={benefitsStyles.imageSection}
                    />
                </View>
                <View>
                    <Text variant='subtitle-semibold' style={benefitsStyles.subtitleSection}>Suma al comprar</Text>
                    <Text variant='default-body'>Muy pronto podrás acumular compras y llevarte productos de regalo</Text>
                    <Image 
                        source={require('../assets/suma.png')}
                        style={benefitsStyles.imageSection}
                    />
                </View>
                <View style={benefitsStyles.bannerCarrousel}>
                    <Text variant='subtitle-semibold' style={benefitsStyles.bannersSubtitle}>Más promociones</Text>
                    <BannerCarousel
                        variant="default"
                        banners={banners}
                        withStepper
                        stepperPosition="left"
                        bannerWidth={'80%'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const benefitsStyles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'white'
    },
    mainScroll: {
        marginHorizontal: 15,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      },
      title: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 20,
      },
      leftContent: {
        flex: 0.65,
        marginRight: 5,
      },
      rightContent: {
        flex: 0.35,
        alignItems: 'flex-end',
      },
      subtitle: {
        fontWeight: '500',
        fontSize: 18
      },
      points: {
        marginBottom: 10,
        fontWeight: '800'
      },
      tagContent: {
        fontWeight: '600',
      },
      image: {
        width: 100,
        height: 100,
      },
      imageGrid:{
        width: 70,
        height: 70,
        resizeMode: 'cover',
        marginTop: 15,
      },
      subtitleSection:{
        fontWeight: '500',
        fontSize: 20,
        marginTop: 25,
      },
      imageSection:{
        resizeMode: 'contain',
        width: 350,
        height: 250,
        marginTop: 25,
      },
      bannerCarrousel:{
        marginVertical: 25,
      },
      bannersSubtitle:{
        marginVertical: 15,
        fontWeight: '500',
        fontSize: 20,
      }
  });

export default BeneficiosScreen;
