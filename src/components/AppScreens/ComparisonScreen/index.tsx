import React, { useEffect, useState } from 'react';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';
import {
  Text, View, StyleSheet, ScrollView, Dimensions, ImageBackground, Platform, Image,
} from 'react-native';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('screen');

type Props = {
  recordThunk: Record;
};

type Record = {
  coment: string;
  date: string;
  url: string;
};

type HeaderProps = {
  title: string;
  icon?: React.ReactElement;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  imgContainer: {
    width: width - 72,
    height: width * 0.6,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 36 * 0.66,
    marginVertical: 20,
    borderRadius: 12,
    marginBottom: (width * 0.6) * 0.35,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  infor: {
    flexDirection: 'column',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 10,
    bottom: 20,
    backgroundColor: '#a9a9a9',
    width: width - (36 * 4),
    height: (width * 0.6) * 0.35,
  },
  title: {
    fontSize: 14 * 1.25,
    fontWeight: '500',
    paddingBottom: 5,
  },
  headerContainer: {
    marginTop: Constants.statusBarHeight,
    height: 70,
    marginRight: 20,
    marginLeft: 20,
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    marginLeft: 10,
  },
  headerIcon: {
    marginRight: 10,
  },
});

export const Header: React.FC<HeaderProps> = ({ title, icon }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
    {
      icon && (
        <View style={styles.headerIcon}>{icon}</View>
      )
    }
  </View>
);

const Item = ({ date, coment, url }) => (
  <View>
    <ImageBackground
      style={[styles.imgContainer, styles.shadow]}
      imageStyle={{ borderRadius: 12 }}
      source={{ uri: url }}
    />
    <View style={styles.infor}>
      <ScrollView>
        <Text style={styles.title}>
          {date}
        </Text>
        <Text>
          {coment}
        </Text>
      </ScrollView>
    </View>
  </View>
);

const ComparisonScreen: React.FC<Props> = ({ recordThunk }) => {
  console.log('mount');

  return (
    <View style={{ flex: 1 }}>
      {recordThunk
        ? (
          <View style={styles.container}>
            <View>
              <Header title="一覧" />
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
              {
                Object.keys(recordThunk).map((key, index) => {
                  const { date, coment, url } = recordThunk[key];
                  return (
                    <Item key={date} date={date} coment={coment} url={url} />
                  );
                })
              }
            </ScrollView>
          </View>
        )
        : <View />}
    </View>
  );
};
export default ComparisonScreen;
