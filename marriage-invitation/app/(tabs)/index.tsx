import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#757306ff', dark: '#757306ff' }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/hero.jpg')}
            style={styles.headerImageBackground}
          />
          <LinearGradient
            colors={['rgba(230, 190, 90, 0.0)', 'rgba(204, 179, 114, 0.85)']}
            style={styles.fadeGradient}
          />
          <ThemedText style={styles.headerText}>
            Mateus e Alice
          </ThemedText>
        </View>
      }>
      
      {/* MOVIDO PARA DENTRO: 
        Este é o conteúdo que vai abaixo do header e será rolável.
      */}
      <View>
        <ThemedText style={{ fontSize: 24, fontWeight: '600', marginBottom: 16 }}>
          Detalhes do Evento
        </ThemedText>
      </View>
      {/* Você pode adicionar mais conteúdo aqui dentro */}

    </ParallaxScrollView>
    // O <View> que estava aqui foi movido para cima
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.7,
    zIndex: 0,
  },
  headerText: {
    fontSize: 100,
    fontWeight: '800',
    color: '#FFFFFF',
    fontFamily: 'WindSong_500Medium',
    zIndex: 2,
  },
  fadeGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    zIndex: 1,
  }
});