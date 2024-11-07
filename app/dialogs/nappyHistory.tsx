import { ScrollView,FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { hp } from '@/helpers/common';
import  ScreenWrapper  from '../../components/ScreenWrapper'



const profile = require('../../assets/images/vecteezy_ai-generated-beautiful-young-primary-school-teacher-at_32330362 (1).jpg');

type Props = {}
const data = [
    { date: 'Today', type: 'Mixed'},
    { date: '12 May 24', type: 'Wet'},
    { date: '11 May 24', type: 'Mixed'},
    { date: '10 May 24', type: 'Mixed'},
  ];

const nappyHistory = (props: Props) => {
    const router = useRouter()
    const renderRow = ({ item }: any) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.date}</Text>
          <Text style={styles.cell}>{item.type}</Text>
        </View>
      );
  return (
    <ScreenWrapper bg='white'>
        <View style={styles.container}>
        <View style={styles.headerProfile}>
                <MaterialIcons name="cancel" size={30} color="#000" onPress={() => router.back()} />
                <Text style={styles.header}>Summary</Text>
                <Image source={profile} style={styles.avatar} />
        </View>
        <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Date</Text>
            <Text style={styles.headerText}>Type</Text>
        </View>
        <FlatList
            data={data}
            renderItem={renderRow}
            keyExtractor={(item) => item.date}
            contentContainerStyle={styles.tableBody}
        />
    </View>
    </ScreenWrapper>
  )
}

export default nappyHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
  
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        paddingVertical: 10,
        marginTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#ccc',
        borderBottomWidth: 2,
      },
      headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        color: Colors.primary,
      },
      tableBody: {
        backgroundColor: Colors.secondary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: hp(73)
      },
      row: {
        flexDirection: 'row',
        paddingVertical: 10,

      },
      cell: {
        flex: 1,
        textAlign: 'center',
        color: '#000',
      },
})