import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Accueil from './Accueil'
import GenerateurQR from './Generateur'
import LecteurQR from './LecteurQR'

const TpStackNavigator = createStackNavigator({
  Entree: { 
    screen: Accueil,
    navigationOptions: {
      title: 'Bienvenue'
    }
  }
  
})

const QRTabNavigator = createBottomTabNavigator({
  Entree: {
    screen: Accueil
  },
  GenerateurQR: {
    screen: GenerateurQR
  },
  LecteurQR: {
    screen: LecteurQR
  }
})
export default createAppContainer(QRTabNavigator)