import React, {Component} from 'react';
import{
  Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList
} from 'react-native';


import axios from 'axios';
import { S1111, S1313 } from './ScreenName';


// list cross
export default class  S10 extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        idavi: this.props.navigation.state.params.idavi,
        datacross: [],
      };
      
    }

    componentDidMount(){
      const url = `http://192.168.5.106/webmedia/API/getcross.php?
      id=${this.state.idavi}`;
    axios.get(url)
    .then(response => {
      console.log(response.data[0] + "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
      this.setState({
        datacross: response.data[0]
      });
  
    })
    .catch(error => {
      console.log(error);
    })
    }
 
    gotoDetail = (index) => {
      var D = new Date();
      let y = D.getFullYear();
      let m = D.getMonth();
      let d = D.getDate();

      console.log(y + "YYYYYYYYYYYYYYYYYYYYYYYYYYYY");
      console.log(m + "YYYYYYYYYYYYYYYYYYYYYYYYYYYY");
      console.log(d + "YYYYYYYYYYYYYYYYYYYYYYYYYYYY");
      var db = {
        idcross: this.state.datacross[index].idcross
      }
      console.log(db.idcross + "IDDDDDDDDDD");
      const { navigation } = this.props;
      navigation.navigate(S1111, db);
    }

    createCross = () => {
      const { navigation } = this.props;
      navigation.navigate(S1313);
    }
    
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtheader}>Cross Info</Text>
          </View>

          <FlatList 
          data={this.state.datacross}
          renderItem={({item, index}) => (
                  <View style={styles.formcross}>
                    <TouchableOpacity 
                    //onPress={() => this.updateitem(index)}
                    onPress={() => this.gotoDetail(index)}
                    >
                      <View style={styles.rowcross}>
                        <Text style={styles.txtcross}>{item.crossname}</Text>
                        <Image style={styles.icon} source={require('./image/arrow.png')}></Image>
                      </View>
                      
                  </TouchableOpacity>
                      

                  </View>
                  
              
            
            
          )}
        />

          
        
          <TouchableOpacity 
                    //onPress={() => this.updateitem(index)}
                    onPress={() => this.createCross(false)}
                    >
                       <View style={styles.addcross}>
            <Text style={styles.txtadd}>Add New Cross</Text>
            <Image source={require('./image/capture.png')}></Image>
          </View>
                      
             </TouchableOpacity>
         

          <View>
          <Image style={styles.imgbottom} source={require('./image/img1.png')}></Image>
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
    flexDirection: 'row',
    marginBottom: 40,
  },

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
    alignSelf: 'center',
    marginTop: 7,
    color: 'blue'
  },

  formcross: {
    borderColor: 'blue',
    marginStart: 5,
    height: 70,
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
    marginEnd: 40
  },

  imgbottom: {
    scaleX: 1.40,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  logo: {
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
  },


})
