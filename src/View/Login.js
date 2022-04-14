import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Alert, TouchableOpacity, Dimensions, TextInput  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import InputText from '../components/InputText';
import Button from '../components/Button';

import API from '../services/API';


const width  = Dimensions.get('window').width / 1.1
const height = Dimensions.get('window').height / 17

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [errorLogin, setErrorLogin] = useState('')
  const user = { email: email, password: password};

  const apiLogin = async () => {

    try {
      const response = await API.post('/autenticacao/entrar', user)
    Alert.alert('Sucesso', 'Logado com sucesso');
  } catch (errorLogin) {
    setErrorLogin(true)
  };
}


  return <SafeAreaView style={styles.container}>

            <Text style={styles.titulo}>Faça o login em sua conta</Text>

            <View style={styles.acesso}>

              <InputText 
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
                />
              <View  style={styles.areaSenha}>
                <TextInput
                  style={styles.inputSenha} 
                  placeholder='Senha'
                  color={'black'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={esconderSenha}
                />

                <TouchableOpacity style={styles.icone} onPress={() => setEsconderSenha(!esconderSenha)}>
                  {esconderSenha?
                    <Ionicons name='eye' color={'rgb(130, 10, 209)'} size={20}/>
                    :
                    <Ionicons name='eye-off' color={'grey'} size={25} />

                  }   
                </TouchableOpacity>
            
                </View>
                {errorLogin === true
                ?
                <View style={styles.alertaErro}>
                  <Ionicons name='alert-circle-outline' color={'rgb(130, 10, 209)'} size={20}/>
                  <Text style={styles.mensagemErro}>Email ou senha Invalidos</Text>
                </View>
                :
                <View />
                }

                { email === '' || password === ''
                ?
                <Button 
                disable={true}
                Texto='Entrar'/>
                :
                <View>
                <Button 
                Texto= 'ENTRAR'
                onPress={apiLogin}/>
              </View>
                }
            
          
            </View>
            
          </SafeAreaView>
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titulo: {
      fontSize: 23,
    },
    acesso: {
      marginTop: 15
    },
    areaSenha: {
        flexDirection: 'row',
        width: width,
        height: height,
        borderRadius: 15,
        borderColor: '#000',
        borderWidth: 0.5,
        marginTop: 20,
        fontSize: 15
    },
    inputSenha: {
      width: '85%',
      height: height,
      paddingLeft: 20,
      color: '#000'
    },
    icone: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '15%',
      height: height,
    },
    alertaErro: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    mensagemErro: {
      paddingLeft: 10,
      color: '#bdbdbd',
      fontSize: 16
    }
});




export default Login;