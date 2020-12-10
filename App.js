import React from 'react'
import {StyleSheet,Text,View,Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function parasol({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Welcome to Parasol</Text>
            <Button title="Log in as a Job Poster" onPress={() => navigation.navigate('Poster Account')} />
            <Button title="Log in as a Worker" onPress={() => navigation.navigate('Worker Account')} />
        </View>
    )
}

function parasolPoster({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Welcome User</Text>
            <Button title="Post a Job" onPress={() => navigation.navigate('Post a Job')} />
            <Button title="View Current Jobs" onPress={() => navigation.navigate('Current Jobs Posted')} />
            <Button title="View Past Jobs" onPress={() => navigation.navigate('Past Jobs Posted')} />
            <Button title="View Account Information" onPress={() => navigation.navigate('Poster Account Information')} />
        </View>
    )
}

function jobPosting({navigation}) {
    return (
        <View style = {styles.container}>
            <Text>Post a Job</Text>
            <Text>Job Title: *Enter Text Here*</Text>
            <Text>Offer: *Enter Text Here*</Text>
            <Text>Location: *Enter Text Here*</Text>
            <Text>Date and Time: *Enter Text Here*</Text>
            <Text>Notes: *Enter Text Here*</Text>
            <Button title="Submit" onPress={() => navigation.navigate('Job Submitted')}/>
        </View>
    )
}

function jobSubmitted({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>The Job has been submitted</Text>
      <Button title="Done" onPress={() => navigation.navigate('Poster Account')}/>
    </View>
  )
}

function viewCurrentJobsPoster({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Current Jobs</Text>
            <Text> Job Title | Offer |  Location   |     Date and Time       | Notes |   Worker </Text>
            <Text>   Job F   |  $60  | 6 Sixth Dr. | January 6th 2021 9:00pm | None  | Test Worker </Text>
        </View>
    )
}

function viewPastJobsPoster({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Past Jobs</Text>
            <Text> Job Title | Offer |  Location   |     Date and Time       | Notes |   Worker </Text>
            <Text>   Job G   |  $70  | 6 Sixth Dr. | January 7th 2020 9:00pm | None  | Test Worker </Text>
        </View>
    )
}

function viewAccountInformationPoster({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Account Information:</Text>
            <Text>Name: Test Poster</Text>
            <Text>Password: *******</Text>
            <Text>Address: 6 Sixth Drive</Text>
            <Text>Email: testposter@testing.com</Text>
            <Text>Phone Number: 123-456-7890</Text>
            <Text>Account Type: Poster</Text>
            <Button title="Logout" onPress={() => navigation.popToTop('parasol')} />
        </View>
    )
}

function parasolWorker({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Welcome User:</Text>
        <Text> Job Title | Offer |  Location   |     Date and Time       | Notes </Text>
        <Text>   Job A   |  $10  | 1 First Dr. | January 1st 2021 4:00pm | None </Text>
        <Text>   Job B   |  $20  | 2 First Dr. | January 2nd 2021 5:00pm | None </Text>
        <Text>   Job C   |  $30  | 3 Third Dr. | January 3rd 2021 6:00pm | None </Text>
        <Text>   Job D   |  $40  | 4 Third Dr. | January 4th 2021 7:00pm | None </Text>
        <Text>   Job E   |  $50  | 5 Fifth Dr. | January 5th 2021 8:00pm | None </Text>
        <Button title="View Current Jobs" onPress={() => navigation.navigate('Current Jobs')} />
        <Button title="View Past Jobs" onPress={() => navigation.navigate('Past Jobs')} />
        <Button title="View Account Information" onPress={() => navigation.navigate('Worker Account Information')} />
    </View>
)
}

function viewCurrentJobsWorker({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Current Jobs:</Text>
            <Text> Job Title | Offer |  Location   |     Date and Time       | Notes |   Poster </Text>
            <Text>   Job F   |  $60  | 6 Sixth Dr. | January 6th 2021 9:00pm | None  | Test Poster</Text>
        </View>
    )
}

function viewPastJobsWorker({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Past Jobs</Text>
            <Text> Job Title | Offer |  Location   |     Date and Time       | Notes |   Poster </Text>
            <Text>   Job G   |  $70  | 6 Sixth Dr. | January 7th 2020 9:00pm | None  | Test Poster </Text>
        </View>
    )
}

function viewAccountInformationWorker({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Account Information:</Text>
            <Text>Name: Test Worker</Text>
            <Text>Password: *******</Text>
            <Text>Address: 7 Sixth Drive</Text>
            <Text>Email: testworker@testing.com</Text>
            <Text>Phone Number: 098-765-4321</Text>
            <Text>Account Type: Worker</Text>
            <Button title="Logout" onPress={() => navigation.popToTop()} />
        </View>
    )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Menu">
        <Stack.Screen name="Main Menu" component={parasol} />
        <Stack.Screen name="Poster Account" component={parasolPoster} />
        <Stack.Screen name="Post a Job" component={jobPosting} />
        <Stack.Screen name="Job Submitted" component={jobSubmitted} />
        <Stack.Screen name="Current Jobs Posted" component={viewCurrentJobsPoster} />
        <Stack.Screen name="Past Jobs Posted" component={viewPastJobsPoster} />
        <Stack.Screen name="Poster Account Information" component={viewAccountInformationPoster} />
        <Stack.Screen name="Worker Account" component={parasolWorker} />
        <Stack.Screen name="Current Jobs" component={viewCurrentJobsWorker} />
        <Stack.Screen name="Past Jobs" component={viewPastJobsWorker} />
        <Stack.Screen name="Worker Account Information" component={viewAccountInformationWorker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App;