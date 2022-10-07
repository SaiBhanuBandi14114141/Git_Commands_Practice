import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Styles} from '../styles/recent.activity.styles';
import {transactionDetails} from '../staticData';
import {months} from '../staticData';

const RecentActivityScreen = () => {
  const [mon, setMon] = useState('Jan');
  return (
    <ScrollView>
      <View style={Styles.transactonsHead}>
        <Text style={Styles.arrow}>{'<'}</Text>
        <Text style={Styles.recentActivity}>Recent Activity</Text>
        <Image
          source={require('../../assets/images/searchImage.jpeg')}
          style={Styles.searchImage}
        />
      </View>
      <View>
        <ScrollView horizontal={true}>
          {months.map(month => (
            <TouchableOpacity onPress={() => setMon(month)}>
              <Text style={Styles.monthsAlign}>{month}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/*<Text style={{textAlign: 'center'}}>{mon + ' month is Selected'}</Text>*/}
      {transactionDetails.map(item =>
        item.month == mon ? (
          <View>
            <View style={Styles.transactionDate}>
              <Text style={Styles.transactionDateText}>{item.date}</Text>
              <Text style={Styles.arrow}> {'>'} </Text>
            </View>
            <View style={Styles.transactionDetails}>
              <View>
                <Image
                  source={item.img}
                  style={Styles.transactionDetails_Image}
                />
              </View>
              <View style={Styles.transactionData}>
                <Text style={{fontWeight: '900', fontSize: 16}}>
                  {item.firstName}
                </Text>
                <Text>{item.time}</Text>
              </View>
              <View>
                <Text style={{fontWeight: '900'}}>{item.moneyTransfered}</Text>
              </View>
            </View>
          </View>
        ) : (
          ''
        ),
      )}
    </ScrollView>
  );
};

export default RecentActivityScreen;
