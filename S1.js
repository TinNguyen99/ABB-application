import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorPropType, Alert
} from 'react-native';

import {S33} from './ScreenName';
import {S22} from './ScreenName';

import axios from 'axios';
export default class  S1 extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        pass: '',
        iduser: '',
        user_createdate: '',
        phone_number: '',
        address: '',
        dbus: [],
      };
    }

 
  gotoForget (){
    console.log("kkkkkkkkkk!");
  };

  gotoregister(){
    const { navigation } = this.props;
    navigation.navigate(S22);
  };

  // check = (ll) =>{
  //   var i = 0;
    
  //   for(i = 0;i<ll; ++i){
  //     console.log(this.state.dbus[i][0].username + "VVVVVVVV" + this.state.username);
  //     console.log(this.state.dbus[i][0].password + "VVVVVVVV" + this.state.pass);
  //     console.log("chua VO IF ROI NEFFFFFFFFFFFFFF");
  //     if(this.state.dbus[i][0].username === this.state.username && this.state.dbus[i][0].password === this.state.pass){
  //       this.setState({
  //         username: response.data[i][0].username,
  //         pass: response.data[i][0].pass,
  //         iduser: response.data[i][0].iduser,
  //         user_createdate: response.data[i][0].user_createdate,
  //         phone_number: response.data[i][0].phone_number,
  //         address: response.data[i][0].address,
  //       });
  //       console.log("VO IF ROI NEFFFFFFFFFFFFFF");
  //       console.log(this.state.iduser+"FFFFFFFFFFFFFF");
  //       var db = {
  //         username: this.state.username,
  //         pass: this.state.pass,
  //         iduser: this.state.iduser,
  //         user_createdate: this.state.user_createdate,
  //         phone_number: this.state.phone_number,
  //         address: this.state.address,
  //       }
  //       navigation.navigate(S33, db);
  
  //     }
  
  
  //   }
  //   Alert.alert(
  //     'Warning',
  //     'Please check again!',
  //     [
       
  //       { text: 'OK', onPress: () => console.log('OK Pressed') }
  //     ],
  //     { cancelable: false }
  //   );
  // }

  login = async () =>{
//     var len = 0;
//     const { navigation } = this.props;
//     const url = 'http://192.168.5.106/webmedia/API/getuserpass.php';
//   axios.get(url)
//   .then(response => {
//     console.log(response.data);
//     let i = 0;
//     let aa = [];
//     while(response.data[i] != undefined){
//       aa.push(response.data[i]);
//       ++i;
//     }
//     len = aa.length();
//     this.setState({
//       dbus: aa
//     });
//     console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");

//     console.log(this.state.dbus[1][0].username);


//   })
//   .catch(error => {
//     console.log(error);
//   })
//  this.check(leng);


      


    ///////
    const { navigation } = this.props;
    const url = "http://192.168.5.106/webmedia/API/getuserpass.php";
    axios.get(url)
    .then(response => {
    // let ll = 0;
    // while(response.data[i] != undefined){
    //   ++ll;
    // }
      console.log(this.state.username + "..............." + this.state.pass);
      console.log(response.data[0][0].username + "......hghghg........." + response.data[0][0].password);
      let i = 0;
      while(response.data[i] != '..'){
        if(this.state.username == response.data[i][0].username && this.state.pass == response.data[i][0].password){
          this.setState({
            username: response.data[i][0].username,
            pass: response.data[i][0].password,
            iduser: response.data[i][0].iduser,
            user_createdate: response.data[i][0].user_createdate,
            phone_number: response.data[i][0].phone_number,
            address: response.data[i][0].address,
          });
          console.log("LAN THUUUUUUUUUU " + response.data[i][0].username + response.data[i][0].password + response.data[i][0].iduser);
          var db = {
            username: response.data[i][0].username,
           // pass: this.state.pass,
            iduser: response.data[i][0].iduser,
           // user_createdate: this.state.user_createdate,
           // phone_number: this.state.phone_number,
           // address: this.state.address,
          }
          navigation.navigate(S33, db);
        } else if (this.state.username == '' || this.state.pass == '') {
          
          Alert.alert(
            'Warning',
            'Please check again!',
            [
             
              { text: 'OK', onPress: () => console.log('OK else if') }
            ],
            { cancelable: false }
          );
          
        } 
        ++i;
      }
      
      i = 0;
      
      
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  };
    
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.txth1}>
            Welcome
          </Text>

          <Text style={styles.txth2}>
            Let's get started
          </Text>

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter email here..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(username) => this.setState({username})}
                    autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                      placeholder="Enter password here..."
                      placeholderTextColor="rgba(30,30,30,0.7)"
                      keyboardType="default"
                      returnKeyType="done"
                      onChangeText={(pass) => this.setState({pass})}
                      autoCorrect={false}/>
          </View>

          <TouchableOpacity onPress={ () => this.gotoForget()}>
            <Text style={styles.forget}>Forget password?</Text>
          </TouchableOpacity>

            <TouchableOpacity 
            style={styles.sign}
            onPress={() => this.login()}>
              <Text style={styles.res}>Sign in</Text>
            </TouchableOpacity>


          <View style={styles.sp}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={ () => this.gotoregister()}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: "#4668e8"}}> Resigter!</Text>
            </TouchableOpacity>
          </View>
          
          <Image source={require('./image/lgthem.png')}/>
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
    fontSize: 40,
    color: '#dc3131',
    marginTop: 100,
    marginStart: 25,
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
