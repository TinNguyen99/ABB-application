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

// cap nhat cross
export default class  S12 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      idcross: this.props.navigation.state.params.idcross,
       // let idcross = this.state.cross.idcross == 
      // crossname
      // crossbirthday
      // weight
      // note
      // idavi
      oc: '',
      ncrossname: '',
      ncrossbirthday: '',
      nweight: '',
      nnote: '',
      nidavi: '',

      // temp
      tcrossname: '',
      tcrossbirthday: '',
      tweight: '',
      tnote: '',
      tidavi: '',
      crossimage: '',
    };
  }

  componentDidMount(){
    const url = `http://192.168.5.106/webmedia/API/getcross-d.php?
      id=${this.state.idcross}`;
    axios.get(url)
    .then(response => {
      console.log(response.data)
      this.setState({
        oc: response.data[0]
      });
  
    })
    .catch(error => {
      console.log(error);
    })
  }
 
  gotoUpdate = () => {
    let crossname = this.state.oc.crossname == this.state.ncrossname && this.state.ncrossname != '' ? this.state.ncrossname : this.state.oc.crossname
    let crossbirthday = this.state.oc.crossbirthday == this.state.ncrossbirthday && this.state.ncrossbirthday != '' ? this.state.ncrossbirthday : this.state.oc.crossbirthday
    let weight = this.state.oc.weight == this.state.nweight && this.state.nweight != '' ? this.state.nweight : this.state.oc.weight
   
    let note = this.state.oc.note == this.state.nnote && this.state.nnote != '' ? this.state.nnote : this.state.oc.note

    axios.post("http://192.168.5.106/webmedia/API/update-cross.php", 
    'idcross=' + crossname +
    '&crossname=' + crossname  +
    '$crossbirthday=' + crossbirthday +
    '&crossimage=' + this.state.crossimage +
    '&weight=' + weight +
    '&note=' + note +
    '&idavi='+this.state.oc.idavi
    )
    .then(function (response) {
      console.log(response);
      console.log("OK TN");
  
      
  
    })
    .catch(function (error) {
      console.log(error);
      console.log("LOI LOI LOI....");
    });
  };
    
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
          crossimage: source,
        });

      }
    });
  }
  render(){
    let img1 = this.state.avatarSource1 == null ? null : 
    <Image source={this.state.avatarSource1}
    style={{width: 200, height: 200}}/> 
    
    return(
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.txth1}>
            Change Information
        </Text>

        <TouchableOpacity onPress={ () => this.showimg1()}>
              <Text style={styles.txt}>add a picture!</Text>
        </TouchableOpacity>
        {img1}
          
        

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Cross Name..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(ncrossname) => this.setState({ncrossname})}
                    autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Weight(Kg)..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(nweight) => this.setState({nweight})}
                    autoCorrect={false}/>
          </View>

          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Birthday..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(ncrossbirthday) => this.setState({ncrossbirthday})}
                    autoCorrect={false}/>
          </View>

          <View>
            
          </View>


          <View style={styles.input}>
            <TextInput
                    placeholder="Enter Note..."
                    placeholderTextColor="rgba(30,30,30,0.7)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={(nnote) => this.setState({nnote})}
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
    marginBottom: 12
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
    alignSelf:'center',
    fontSize: 17,
    fontWeight: "bold",
    color: 'blue',
    marginBottom: 15,
    marginTop:5,
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
