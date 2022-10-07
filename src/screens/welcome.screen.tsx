import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Styles} from '../styles/welcome.styles';
import {images} from '../staticData';
import {transaction_Images} from '../staticData';
import {transaction_Data} from '../staticData';

const WelcomeScreen = () => {
  return (
    <ScrollView>
      <View style={Styles.heading}>
        <View>
          <Text>Hi, Welcome</Text>
        </View>
        <View style={Styles.imagePlacing}>
          <Image
            source={require('../../assets/images/images/menuImage.jpeg')}
            style={Styles.menuImage}
          />
        </View>
        <View>
          <Text style={Styles.headingName}>Oasis Skyes</Text>
        </View>
      </View>
      <ScrollView horizontal={true}>
        {images.map(item => (
          <Image key={item.id} source={item.img} />
        ))}
      </ScrollView>
      <View style={Styles.sendMoney}>
        <Text style={Styles.sendMoneyText}>Send Money</Text>
        <Text>See all</Text>
      </View>
      <View>
        <ScrollView horizontal={true} style={Styles.scrollView}>
          {transaction_Images.map(item => (
            <Image
              key={item.id}
              source={item.img}
              style={Styles.sendMoneyScrollView}
            />
          ))}
        </ScrollView>
      </View>
      <View style={Styles.overView}>
        <Text style={Styles.overViewText}>Overview</Text>
        <Text>See more</Text>
      </View>
      {transaction_Data.map(item => (
        <View>
          <View style={Styles.transactionDate}>
            <Text style={Styles.transactionDateText}>{item.date}</Text>
            <Text> {'>'} </Text>
          </View>
          <View style={Styles.transactionDetails}>
            <View>
              <Image
                source={item.img}
                style={Styles.transactionDetails_Image}
              />
            </View>
            <View style={Styles.transactionData}>
              <Text style={{fontWeight: '900'}}>{item.firstName}</Text>
              <Text>{item.time}</Text>
            </View>
            <View>
              <Text style={{fontWeight: '900'}}>{item.moneyTransfered}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default WelcomeScreen;
