import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert
} from 'react-native';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import {S11} from './ScreenName';
export default class  S2 extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        pass: '',
        iduser: '',
        user_createdate: '',
        phone_number: '',
        address: '',
      };
    }
// axios.post("http://webmediatest.000webhostapp.com/insertdata.php", 
    //     'hoten=TN99&mssv=19992021&diachi=NThuan'
 
    RegisterUser (){
      
      const { navigation } = this.props;
      let date = new Date();
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();
      let temp = this.state.username;
      this.setState({
        iduser: "usid" + temp + d,
        user_createdate: y + '-' + m + '-' + d,
      });
      axios.post("http://192.168.5.106/webmedia/API/insert-user.php", 
        'username=' + this.state.username +
        '&password=' + this.state.pass +
        '&iduser=' + this.state.iduser +
        '&user_createdate=' + this.state.user_createdate +
        '&phone_number=' + this.state.phone_number +
        '&address=' + this.state.address
      )
      .then(function (response) {
        console.log(response);
        console.log("OK TN");

        
        navigation.navigate(S11);
      })
      .catch(function (error) {
        console.log(error);
        console.log("LOI LOI LOI....");
      });
      Alert.alert(
        'Register successful!',
        [
         
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
  };
    
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.txth1}>
            Let's Register
          </Text>

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter email..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="default"
                    returnKeyType="next"
                    onChangeText={(username) => this.setState({username})}
                    autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                      placeholder="Enter password..."
                      placeholderTextColor="rgba(30,30,30,0.7)"
                      keyboardType="default"
                      returnKeyType="next"
                      onChangeText={(pass) => this.setState({pass})}
                      autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                      placeholder="Enter phone numbers..."
                      placeholderTextColor="rgba(30,30,30,0.7)"
                      keyboardType="numeric"
                      returnKeyType="next"
                      onChangeText={(phone_number) => this.setState({phone_number})}
                      autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                      placeholder="Enter address..."
                      placeholderTextColor="rgba(30,30,30,0.7)"
                      keyboardType="default"
                      returnKeyType="done"
                      onChangeText={(address) => this.setState({address})}
                      autoCorrect={false}/>
          </View>

    
            <TouchableOpacity 
            style={styles.sign}
            onPress={ () => this.RegisterUser()}>
              <Text style={styles.res}>Register now</Text>
            </TouchableOpacity>


          <Image style={{marginTop: 70, marginStart:170}} source={require('./image/rstheme.png')}/>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(32, 53, 70)',
    backgroundColor: 'rgb(250, 250, 250)',
    flexDirection: 'column',
  },

  txth1: {
    fontSize: 30,
    color: '#dc3131',
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: "900",
  },

  txth2: {
    fontSize: 18,
    color: '#dc3131',
    marginTop: 17,
    marginStart: 25,
    fontWeight: "300",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginStart: 25,
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    height: 55,
    width: 350,
  },

  forget: {
    marginStart: 30,
    marginTop: 10,
    fontSize: 15,

  },

  sp: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,

  },

  res: {
    marginTop: 12,
    fontSize: 23,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  sign: {
    backgroundColor: "#d34f4f",
    borderRadius: 25,
    marginStart: 25,
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    height: 55,
    width: 350,
  },
  //
  formheader: {
    height: 200,
    backgroundColor: "#c3f3c6",
  },

  header: {
    flexDirection: 'row',
    marginBottom: 7,
    marginTop: 7,
  },

  txt: {
    fontSize: 17,
    fontWeight: "bold",
    marginStart: 35
  },

  body: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly'
  },

  colum: {
    flexDirection: 'column',
  },

  chooseavi: {
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 350,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#ff7800"
  },
//
  iconback: {
    width: 30,
    height: 30,
    marginStart: 20,
    alignSelf: 'stretch',
    marginTop: 9
  },

  txtheader: {
    fontSize: 25,
    fontWeight: "bold",
    marginStart: 120,
    marginTop: 7,
    color: '#38a716'
  },

  formcross: {
    marginStart: 5,
    height: 80,
    width: 390,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },

  rowcross: {
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },

  txtcross: {
    fontSize: 23,
    fontWeight: "bold",
    marginEnd: 200,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginStart: 40
  },

  icon: {
    width: 30,
    height: 30,
    marginEnd: 17,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginStart: 40,
  },

  addcross: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 350,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30
  },

  txtadd: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'center',
    color: 'white'
  },

  imgbottom: {
    scaleX: 1.40,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  logo: {
    height: 90,
    width: 90,
    
  },


})
