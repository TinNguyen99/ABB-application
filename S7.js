import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image
} from 'react-native';
import axios from 'axios';
import {S88, S1010} from './ScreenName';

// chi tiet avi
export default class  S7 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // info user
      username: this.props.navigation.state.params.username,

      //main
      dataavi: '',   
      datamale: '',
      datafemale: '',
      idavi: this.props.navigation.state.params.idavi,
    };
  }
 

  componentDidMount(){
    const urlavi = `http://192.168.5.106/webmedia/API/getavi-d.php?
    id=${this.state.idavi}`;
    console.log(this.state.idavi);
  axios.get(urlavi)
  .then(response => {
    console.log(response.data[0].aviavyname);
    this.setState({
      dataavi: response.data[0]
    });

  })
  .catch(error => {
    console.log(error);
  })

  console.log(this.state.idavi+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  const urlmale = `http://192.168.5.106/webmedia/API/getmale.php?id=${this.state.idavi}`;
  axios.get(urlmale)
  .then(response => {
    console.log(response.data);
    if(response.data[0] != 'ok'){
      this.setState({
        datamale: null,
      });
    } else {
      this.setState({
        datamale: response.data[0]
      });
    }
    

  })
  .catch(error => {
    console.log(error);
  })

  const urlfemale = `http://192.168.5.106/webmedia/API/getfemale.php?id=${this.state.idavi}`;
  axios.get(urlfemale)
  .then(response => {
    if(response.data[0] != 'ok'){
      this.setState({
        datafemale: null,
      });
    } else {
      this.setState({
        datafemale: response.data[0]
      });
    }
    
  })
  .catch(error => {
    console.log(error);
  })
  '$idfemale', 
  '$femalename', 
  '$femaleimage',
  '$female_createdate', 
  '$femaleweight', 
  '$idavi'
  if(this.state.datamale == null){
    axios.post("http://192.168.5.106/webmedia/API/insertfemale.php/", 
    'idfemale=' + 'null' +
    '&femalename=' + 'null' +
    '&femaleimage=' + 'null' +
    '&female_createdate=' + 'null' +
    '&femaleweight=' + 'null' +
    '&idavi=' + this.state.idavi
    
  )
  .then(function (response) {
    

  })
  .catch(function (error) {
    console.log(error);
    console.log("LOI LOI LOI....");
  });
  

//male insr
    axios.post("http://192.168.5.106/webmedia/API/insertmale.php/", 
      'idmale=' + 'null' +
      '&malename=' + 'null' +
      '&maleimage=' + 'null' +
      '&male_createdate=' + 'null' +
      '&maleweight=' + 'null' +
      '&idavi=' + this.state.idavi
      
    )
    .then(function (response) {
      

    })
    .catch(function (error) {
      console.log(error);
      console.log("LOI LOI LOI....");
    });
   
  }
       
      }
  

  gotoUpdate = () => {
    
    var db = {
      idavi: this.state.idavi,
      //idmale: this.state.datamale.idmale,
      //idfemale: this.state.datafemale.idfemale,
    }
    const { navigation } = this.props;
    navigation.navigate(S88, db);
  }
  
  viewCross = () => {
    var db2 = {
      idavi: this.state.idavi,
    }
    const { navigation } = this.props;
    navigation.navigate(S1010, db2);
  }

  render(){
    // image

    

    if(this.state.datamale == null || this.state.datafemale == null){
      var imm = <Image style={styles.logo} source={require('./image/m.png')}></Image>
    

    var ifm = <Image style={styles.logo} source={require('./image/fm.png')}></Image> 
   

    var malen = <Text style={styles.txt11}>........</Text>
    var malecd = <Text style={styles.txt11}>........</Text>
    var malew = <Text style={styles.txt11}>........</Text>

    var femalen =<Text style={styles.txt11}>........</Text>
    var femalecd = <Text style={styles.txt11}>........</Text>
    var femalew = <Text style={styles.txt11}>........</Text>
    } else {
      var imm = this.state.datamale.maleimage == undefined || this.state.datamale == null ? 
      <Image style={styles.logo} source={require('./image/m.png')}></Image> :
      <Image style={styles.logo} source={{uri: 'data:image/png;base64,' + this.state.datamale.maleimage }}></Image>
  
      var ifm = this.state.datafemale.femaleimage == undefined || this.state.datamale == null ? 
      <Image style={styles.logo} source={require('./image/fm.png')}></Image> :
      <Image style={styles.logo} source={{uri: 'data:image/png;base64,' + this.state.datafemale.femaleimage }}></Image>
  
      var malen = this.state.datamale.malename != undefined || this.state.datamale == null?
      <Text style={styles.txt11}>{this.state.datamale.malename}</Text> :
      <Text style={styles.txt11}>........</Text>
      var malecd = this.state.datamale.male_createdate != undefined|| this.state.datamale == null ?
      <Text style={styles.txt11}>{this.state.datamale.male_createdate}</Text> :
      <Text style={styles.txt11}>........</Text>
      var malew = this.state.datamale.maleweight != undefined || this.state.datamale == null?
      <Text style={styles.txt11}>Weight: {this.state.datamale.maleweight} kg</Text> :
      <Text style={styles.txt11}>........</Text>
  
      var femalen = this.state.datafemale.femalename != undefined || this.state.datafemale == null ?
      <Text style={styles.txt11}>{this.state.datafemale.femalename}</Text> :
      <Text style={styles.txt11}>........</Text>
      var femalecd = this.state.datafemale.female_createdate != null || this.state.datafemale == null ?
      <Text style={styles.txt11}>{this.state.datafemale.female_createdate}</Text> :
      <Text style={styles.txt11}>........</Text>
      var femalew = this.state.datafemale.femaleweight != null || this.state.datafemale == null?
      <Text style={styles.txt11}>Weight: {this.state.datafemale.femaleweight} kg</Text> :
      <Text style={styles.txt11}>........</Text>
    }
    
    


    return(
      <View style={styles.container}>
          <View style={styles.formheader}>
            <View style={styles.header}>
              <Text style={styles.txtheader}>{this.state.dataavi.aviavyname}</Text>
            </View>

            <View style={styles.header}>
              <Text style={styles.txt}>Aviary ID :</Text>
              <Text style={styles.txt}>{this.state.idavi}</Text>
            </View>

            <View style={styles.header}>
              <Text style={styles.txt}>Date Created :</Text>
              <Text style={styles.txt}>{this.state.dataavi.avi_createdate}</Text>
            </View>

            <TouchableOpacity onPress={ () => this.gotoUpdate(false)}>
              <Text style={styles.txt12}>Update for Male-Female</Text>
            </TouchableOpacity>

          </View>


          <View style={styles.body}>
            <View style={styles.colum}>
            {imm}
              <Text style={{fontSize: 19, color: 'blue', fontWeight: 'bold'}}>Infomation</Text>
              {malen}
              {malecd}
              {malew}
              
            </View>

            <View style={styles.colum}>
              <Image style={{marginTop: 35}} source={require('./image/heart.png')}></Image>
              
            </View>

            <View style={styles.colum}>
            {ifm}
              <Text style={{fontSize: 19, color: 'blue', fontWeight: 'bold'}}>Infomation</Text>
              {femalen}
              {femalecd}
              {femalew}
            </View>
          </View>


          <View style={styles.chooseavi}>
            <TouchableOpacity onPress={ () => this.viewCross(false)}>
              <Text style={styles.txtadd}>View Cross</Text>
            </TouchableOpacity>
          </View>
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

  formheader: {
    height: 200,
    backgroundColor: "#c3f3c6",
  },

  header: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 7,
    marginTop: 7,
  },

  txt: {
    fontSize: 17,
    fontWeight: "bold",
    marginStart: 12
  },

  txt12: {
    marginTop: 12,
    alignSelf: 'center',
    fontSize: 19,
    fontWeight: "bold",
    color: 'blue'
  },
  txt11: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: "bold",
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
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: "bold",
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
 
    //width: null,
    //height: null,
    resizeMode: 'contain'
    
  },


})
