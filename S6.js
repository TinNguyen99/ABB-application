import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorPropType
} from 'react-native';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import { S55 } from './ScreenName';
// tao avi
export default class  S6 extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        aviavyname: '',
        avi_createdate: '',
        idcross: '',
        idmale: '',
        idfemale: '',
        idfarm: this.props.navigation.state.params.idfarm,
      };
    }

 
  gotoRegister (){
    var { navigation } = this.props;
    var Dd = new Date();
    let day = Dd.getDate();
    let mou = Dd.getMonth() + 1;
    let year = Dd.getFullYear();
    let s = Dd.getSeconds();
    let mi = Dd.getUTCMinutes();
    //let tempp = this.state.iduser;

    axios.post("http://192.168.5.106/webmedia/API/insertavi.php/", 
    'idavi=' + 'avi'+day+mi+s +
    '&aviavyname=' + this.state.aviavyname +
    '&avi_createdate=' + year+'-'+mou+'-'+day +
    '&idcross=' + 'null' +
    '&idmale=' + 'null' +
    '&idfemale=' + 'null' +
    '&idfarm=' + this.state.idfarm
    
  )
  .then(function (response) {
    

  })
  .catch(function (error) {
    console.log(error);
    console.log("LOI LOI LOI....");
  });
  console.log(this.state.idfarm);
    console.log(this.state.farmname);
    console.log(this.state.farmaddress);
    console.log("OK TNRRRRRRRRRRR");
  navigation.navigate(S55);
  };
    
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.txth1}>
            Create Your Aviary
          </Text>

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Aviary Name..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(aviavyname) => this.setState({aviavyname})}
                    autoCorrect={false}/>
          </View>

         
    
            <TouchableOpacity 
            style={styles.sign}
            onPress={ () => this.gotoRegister()}>
              <Text style={styles.res}>Create</Text>
            </TouchableOpacity>


          <Image style={{marginTop: 70, marginStart:170}} source={require('./image/lgthem.png')}/>
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
