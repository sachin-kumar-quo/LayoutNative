import React from 'react';
import { View,StyleSheet } from 'react-native';

const CategoryView =() =>{
    return (
        <View style={styles.viewCategories}>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
          <View style={styles.viewCategory}>

          </View>
        </View>
    )
}
export default CategoryView;

const styles = StyleSheet.create({

  viewCategories:{
    flex:1,
    height:250,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'space-around',
    flexWrap:'wrap'
  },
  viewCategory:{
    height:'40%',
    width: '18%',
    backgroundColor:'blue',
    borderWidth:1,
    borderColor:'orange'
  }
})