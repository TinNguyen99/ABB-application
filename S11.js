import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image
} from 'react-native';
import axios from 'axios';
import { S1212 } from './ScreenName';
// chi tiet cross
export default class  S11 extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        cross: '',
        idcross: this.props.navigation.state.params.idcross,
      };
    }

    componentDidMount(){
      const url = `http://192.168.5.106/webmedia/API/getcross-d.php?
      id=${this.state.idcross}`;
     console.log(this.state.idcross + "CCCCCCCCCCCCCCCCCCCCCCC")
    axios.get(url)
    .then(response => {
      console.log(response.data)
      this.setState({
        cross: response.data[0]
      });
  
    })
    .catch(error => {
      console.log(error);
    })
   
    }
    

    updateCross = () => {
      // let idcross = this.state.cross.idcross == 
      // crossname
      // crossbirthday
      // weight
      // note
      // idavi
      var db = {
        idcross: this.state.cross.idcross
      }
      const { navigation } = this.props;
      navigation.navigate(S1212, db);
    }
  render(){
    var D = new Date();
    var y = D.getFullYear();
    var m = D.getMonth() + 1;
    var d = D.getDate();

    console.log(y + "YYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    console.log(m + "YYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    console.log(d + "YYYYYYYYYYYYYYYYYYYYYYYYYYYY");

    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtheader}>Detail of Cross</Text>
          </View>

          <View style={{alignSelf: 'center'}}>
          <Image style={styles.logo} source={{uri: 'data:image/png;base64,' + this.state.cross.crossimage }}></Image>
          </View>
          
          <Text style={styles.txt}>ID:   {this.state.cross.idcross}</Text>
          <Text style={styles.txt}>Name:   {this.state.cross.crossname}</Text>
          <Text style={styles.txt}>Birthday:   {this.state.cross.crossbirthday}</Text>
          <Text style={styles.txt}>Weight:   {this.state.cross.weight} kg</Text>
          <Text style={styles.txt}>Note:   {this.state.cross.note}</Text>
          <Text style={styles.txt}>ID of Aviary:  {this.state.cross.idavi}</Text>
          
          <TouchableOpacity 
                    //onPress={() => this.updateitem(index)}
                    onPress={() => this.updateCross(false)}
                    >
                       <View style={styles.addcross}>
            <Text style={styles.txtadd}>Update Info Cross</Text>
          </View>
                      
                  </TouchableOpacity>

         
          

          <View>
          <Image style={styles.imgbottom} source={require('./image/img2.png')}></Image>
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

  header: {
    alignSelf: 'center',
    height: 50,
    flexDirection: 'row',
    marginBottom: 20,
  },

  iconback: {
    width: 30,
    height: 30,
    marginStart: 20,
    alignSelf: 'stretch',
    marginTop: 9
  },

  txt: {
    fontSize: 20,
    fontWeight: "bold",
    marginStart: 35,
    marginTop: 5,
    marginBottom: 5,
  },
  logo: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginBottom: 15
  },

  txtheader: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 3,
    color: 'blue',
    alignSelf: 'center'
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
    borderColor: 'orange',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30
  },

  txtadd: {
    color: '#fd7700',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },

  imgbottom: {
    scaleX: 1.45,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20

  },
 

})
