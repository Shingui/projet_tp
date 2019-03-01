import { createStackNavigator, createAppContainer } from 'react-navigation'
import Accueil from './Accueil'

const TpStackNavigator = createStackNavigator({
  Entree: { 
    screen: Accueil,
    navigationOptions: {
      title: 'Bienvenue'
    }
  }
})

export default createAppContainer(TpStackNavigator)