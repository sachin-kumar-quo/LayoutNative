import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import CategoryView from './components/category'

const App = () =>  {
  const count = 10;
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView >
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <View style={styles.logo}>

            </View>
            <View style={styles.viewBlock}>
              
            </View>
            <View style={styles.viewBlock}>
              
            </View>
            <View style={styles.viewBlock}>
              
            </View>
          </View>
          <View style={styles.searchView}>
            <Text>hello</Text>
          </View>
        </View>
        <View style={styles.viewBanner}>

        </View>
        <CategoryView />
        <View style={styles.viewAd}>

        </View>
        <CategoryView />
      </ScrollView>
      <View style={styles.viewBase}>
        <View style={styles.baseItem}>

        </View>
        <View style={styles.baseItem}>
          
        </View>
        <View style={styles.baseItem}>
          
        </View>
        <View style={styles.baseItem}>
          
        </View>
        <View style={styles.baseItem}>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBlock :{
    flex:.3,
    borderWidth:1,
    borderColor:'blue',
    height:50,
    marginVertical:2
  },
  headerView :{
    flex:1,
    justifyContent:'center',
    backgroundColor:"orange",
    paddingHorizontal:4
  },
  logoView:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'red',
    borderColor:'orange',
    borderWidth:1,
  },
  logo:{
    flex:1.8,
    borderWidth:1,
    borderColor:'blue',
    height:50,
    marginVertical:2
  },
  searchView :{
    flex:1,
    height:50,
    borderWidth:2,
  },
  viewBanner :{
    flex:1,
    backgroundColor:'blue',
    height:200,
    borderColor:'orange',
    borderRadius:2,
    borderWidth:2
  },
  viewAd:{
    flex:1,
    backgroundColor:'orange',
    height:200,
    paddingTop:20,
    borderColor:'blue',
    borderWidth:3
  },
  viewBase:{
    backgroundColor:'red',
    height:50,
    flexDirection:'row'
  },
  baseItem:{
    height:50,
    flex:1,
    borderWidth:2,
    borderColor:'blue'
  }

});

export default App;
