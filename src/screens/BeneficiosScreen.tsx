import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Text from '../components/Text/Text';
import BannerCarousel from '../components/molecules/BannerCarousel';
import {Banner} from '../types/BannerType';

//Components
import BeneficiosCardGrid from '../customComponents/BeneficiosCardGrid';
import SubsectionComingSoon from '../customComponents/SubsectionComingSoon';
import PointsInfo from '../customComponents/PointsInfo';

//Context
import { useAppContext } from '../contexts/AppContext';

const BeneficiosScreen = () => {

  const { state } = useAppContext();

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

  return (
    <SafeAreaView style={benefitsStyles.mainContainer}>
      <ScrollView
        style={benefitsStyles.mainScroll}
        showsVerticalScrollIndicator={false}>
        <Text variant="title-two-semibold" style={benefitsStyles.title}>
          Beneficios
        </Text>
        <PointsInfo points={state.wallet} imageSRC={require('../assets/Premia1.png')}/>
        <BeneficiosCardGrid/>
        <SubsectionComingSoon title='Acumula productos' description='Muy pronto podrás sumar tus compras y ganar productos de regalo' imageSource={require('../assets/acumula.png')}/>
        <SubsectionComingSoon title='Gana más puntos' description='Muy pronto podrás ganar más puntos en el total de tu compra' imageSource={require('../assets/ganamas.png')}/>
        <SubsectionComingSoon title='Suma al comprar' description='Muy pronto podrás acumular compras y llevarte productos de regalo' imageSource={require('../assets/suma.png')}/>
        <View style={benefitsStyles.bannerCarrousel}>
          <Text
            variant="subtitle-semibold"
            style={benefitsStyles.bannersSubtitle}>
            Más promociones
          </Text>
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
  );
};

const benefitsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainScroll: {
    marginHorizontal: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 20,
  },
  bannerCarrousel: {
    marginVertical: 25,
  },
  bannersSubtitle: {
    marginVertical: 15,
    fontWeight: '500',
    fontSize: 20,
  },
});

export default BeneficiosScreen;
