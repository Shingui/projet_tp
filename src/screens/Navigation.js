import { createStackNavigator, createAppContainer } from 'react-navigation'
import Accueil from './Accueil'
import GenerateurQR from './Generateur'

const TpStackNavigator = createStackNavigator({
  Entree: { 
    screen: Accueil,
    navigationOptions: {
      title: 'Bienvenue'
    }
  },
  GenerateurQR: {
      screen: GenerateurQR
  }
})

export default createAppContainer(TpStackNavigator)