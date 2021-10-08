import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BorderColor } from '../../AppStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
        input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 30,
        textAlign: 'center',
        borderColor: BorderColor,
    },
    btnLogin:{
        width: '100%',
        height: 500,
        borderRadius: 30,
    },
    loginAppLogo:{
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    appName:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#808080'
    }
  });
  
export default styles;