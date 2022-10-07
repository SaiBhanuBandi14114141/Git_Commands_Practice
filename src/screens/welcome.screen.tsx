import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Styles} from '../styles/welcome.styles';

const WelcomeScreen = () => {
  const images = [
    {id: 1, img: require('../../assets/images/images/creditCard1.jpeg')},
    {id: 2, img: require('../../assets/images/images/creditCard1.jpeg')},
    {id: 3, img: require('../../assets/images/images/creditCard1.jpeg')},
    {id: 4, img: require('../../assets/images/images/creditCard1.jpeg')},
    {id: 5, img: require('../../assets/images/images/creditCard1.jpeg')},
  ];
  const transaction_Images = [
    {
      id: 1,
      img: require('../../assets/images/transaction_Images/plusIcon_Image.png'),
    },
    {
      id: 2,
      img: require('../../assets/images/transaction_Images/person1.jpeg'),
    },
    {
      id: 3,
      img: require('../../assets/images/transaction_Images/person2.jpeg'),
    },
    {
      id: 4,
      img: require('../../assets/images/transaction_Images/person3.jpeg'),
    },
    {
      id: 5,
      img: require('../../assets/images/transaction_Images/person4.jpeg'),
    },
    {
      id: 6,
      img: require('../../assets/images/transaction_Images/person5.jpeg'),
    },
  ];
  const transaction_Data = [
    {
      id: 1,
      date: '29 July 2022',
      time: '08.39 AM',
      img: require('../../assets/images/transaction_Images/person1.jpeg'),
      firstName: 'Sai',
      moneyTransfered: '+$100',
    },
    {
      id: 2,
      date: '30 July 2022',
      time: '08.40 AM',
      img: require('../../assets/images/transaction_Images/person2.jpeg'),
      firstName: 'Bhanu',
      moneyTransfered: '+$200',
    },
    {
      id: 3,
      date: '31 July 2022',
      time: '08.41 AM',
      img: require('../../assets/images/transaction_Images/person3.jpeg'),
      firstName: 'Sekhar',
      moneyTransfered: '-$100',
    },
    {
      id: 4,
      date: '29 July 2022',
      time: '08.42 AM',
      img: require('../../assets/images/transaction_Images/person4.jpeg'),
      firstName: 'Sai',
      moneyTransfered: '+$400',
    },
    {
      id: 5,
      date: '30 July 2022',
      time: '08.43 AM',
      img: require('../../assets/images/transaction_Images/person5.jpeg'),
      firstName: 'Bhanu',
      moneyTransfered: '-$200',
    },
  ];
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
