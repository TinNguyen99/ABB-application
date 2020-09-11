import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorPropType, ScrollView
} from 'react-native';
import {S77} from './ScreenName';
import axios from 'axios';

import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

// them male-female
export default class  S8 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      idmale: this.props.navigation.state.params.idmale,
      idfemale: this.props.navigation.state.params.idfemale,
      
      maleweight: '',
      femaleweight: '',
      malename: '',
      femalename: '',

      avatarSource1: '',
      avatarSource2: '',
    };
  }

 
  gotoUpdate(){
    const { navigation } = this.props;
    axios.post("http://192.168.5.106/webmedia/API/update-male.php", 
    `malename=${this.state.malename}&
    maleimage=${this.state.maleimage}&
    maleweight=${this.state.maleweight}&
    idmale=${this.state.idmale}`
  )
  .then(function (response) {
    console.log(response);
    console.log("OK TN");

    
    
  })
  .catch(function (error) {
    console.log(error);
    console.log("LOI LOI LOI....");
  });



  axios.post("http://192.168.5.106/webmedia/API/update-female.php", 
    `femalename=${this.state.femalename}&
    femaleimage=${this.state.femaleimage}&
    femaleweight=${this.state.femaleweight}&
    idfemale=${this.state.idfemale}`
  )
  .then(function (response) {
    console.log(response);
    console.log("OK TN");

    

  })
  .catch(function (error) {
    console.log(error);
    console.log("LOI LOI LOI....");
  });

  navigation.navigate(S77);
  };
    
  render(){
    let img1 = this.state.avatarSource1 == null ? null : 
    <Image source={this.state.avatarSource1}
    style={{width: 200, height: 200}}/> 
    let img2 = this.state.avatarSource2 == null ? null : 
    <Image source={this.state.avatarSource2}
    style={{width: 200, height: 200}}/> 
    return(
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.txth1}>
            Info Male
        </Text>

        <TouchableOpacity onPress={ () => this.showimg1()}>
              <Text style={styles.txt}>add a picture!</Text>
        </TouchableOpacity>
        {img1}
          
        

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Male Name..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(malename) => this.setState({malename})}
                    autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Weight(Kg)..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(maleweight) => this.setState({maleweight})}
                    autoCorrect={false}/>
          </View>


          <Text style={styles.txth1}>
            Info Female
          </Text>

          <TouchableOpacity onPress={ () => this.showimg2()}>
              <Text style={styles.txt}>add a picture!</Text>
          </TouchableOpacity>
          {img2}
          
         

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Female Name..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(femalename) => this.setState({femalename})}
                    autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Weight(Kg)..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(femaleweight) => this.setState({femaleweight})}
                    autoCorrect={false}/>
          </View>

            <TouchableOpacity 
            style={styles.sign}
            onPress={ () => this.gotoUpdate()}>
              <Text style={styles.res}>Update</Text>
            </TouchableOpacity>
        </ScrollView>
          


          <Image style={{marginTop: 1, resizeMode: 'contain', height: 80, marginStart:170}} source={require('./image/rstheme.png')}/>
     </View>
    );
  }

  showimg1 () {
    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource1: source,
        });

      }
    });
  }

  showimg2 () {
    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource2: source,
        });

      }
    });
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
