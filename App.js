//Exercise 1
// import React from 'react';
// import {View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity} from 'react-native';
//
// const datasource = [
//   {key: 'a'},
//   {key: 'b'},
//   {key: 'c'},
//   {key: 'd'},
//   {key: 'e'},
//   {key: 'f'},
//   {key: 'g'},
//   {key: 'h'},
//   {key: 'i'},
//   {key: 'j'},
//   {key: 'k'},
//   {key: 'l'},
//   {key: 'm'},
//   {key: 'n'},
//   {key: 'o'},
//   {key: 'p'},
//   {key: 'q'},
//   {key: 'r'},
//   {key: 's'},
//   {key: 't'},
//   {key: 'u'},
//   {key: 'v'},
//   {key: 'w'},
//   {key: 'x'},
//   {key: 'z'},
// ];
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={{marginBottom: 20}}>
//         <StatusBar hidden={true} />
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//             keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   textStyle: {
//     fontSize: 18,
//     color: '#333',
//   },
// });
//
// export default App;

// Exercise 2
// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, StatusBar, SectionList} from 'react-native';
//
// const datasource = [
//   {
//     data: [
//       {key: 'a'},
//       {key: 'e'},
//       {key: 'i'},
//       {key: 'o'},
//       {key: 'u'},
//     ],
//     title: 'Vowels',
//     bgColor: 'skyblue',
//   },
//   {
//     data: [
//       {key: 'b'},
//       {key: 'c'},
//       {key: 'd'},
//       {key: 'f'},
//       {key: 'g'},
//       {key: 'h'},
//       {key: 'j'},
//       {key: 'k'},
//       {key: 'l'},
//       {key: 'm'},
//       {key: 'n'},
//       {key: 'p'},
//       {key: 'q'},
//       {key: 'r'},
//       {key: 's'},
//       {key: 't'},
//       {key: 'v'},
//       {key: 'w'},
//       {key: 'x'},
//       {key: 'y'},
//       {key: 'z'},
//     ],
//     title: 'Consonants',
//     bgColor: 'khaki',
//   },
// ];
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
//   headerText: {
//     fontSize: 20,
//     margin: 10,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={{marginBottom: 50, margin: 10}}>
//         <StatusBar hidden={true} />
//         <SectionList
//             sections={datasource}
//             renderItem={renderItem}
//             renderSectionHeader={({section: {title, bgColor}}) => (
//                 <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>
//             )}
//
//         />
//       </View>
//   );
// };
//
// export default App;

//Exercise 3
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SectionList, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//
// // Pokémon data
// const datasource = [
//   {
//     data: [
//       { key: 'Bulbasaur', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1-2x.png' },
//     ],
//     title: 'Leaf',
//     bgColor: 'lightgreen',
//     icon: 'leaf',
//   },
//   {
//     data: [
//       { key: 'Charmander', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png' },
//     ],
//     title: 'Fire',
//     bgColor: 'lightcoral',
//     icon: 'fire',
//   },
//   {
//     data: [
//       { key: 'Wartortle', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_8-2x.png' },
//     ],
//     title: 'Water',
//     bgColor: 'lightblue',
//     icon: 'water',
//   },
// ];
//
// // Styles
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//     flexDirection: 'row', // Align name and image horizontally
//     alignItems: 'center',
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//     flex: 1,
//   },
//   imageStyle: {
//     width: 80,
//     height: 120,
//     resizeMode: 'contain',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//     marginLeft: 10,
//   },
// });
//
// // Render a Pokémon item
// const renderItem = ({ item }) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//         <Image source={{ uri: item.image }} style={styles.imageStyle} />
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View style={{ marginBottom: 50, margin: 10 }}>
//         <StatusBar hidden={true} />
//         <TouchableOpacity style={{ marginBottom: 10, padding: 10, backgroundColor: '#007bff', borderRadius: 5 }}>
//           <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>ADD POKEMON</Text>
//         </TouchableOpacity>
//         <SectionList
//             sections={datasource}
//             renderItem={renderItem}
//             renderSectionHeader={({ section: { title, bgColor, icon } }) => (
//                 <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
//                   <Icon name={icon} size={24} color="#000" /> {/* Icon */}
//                   <Text style={styles.headerText}>{title}</Text>
//                 </View>
//             )}
//         />
//       </View>
//   );
// };
//
// export default App;

//Exercise 4
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SectionList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const datasource = [
  {
    data: [
      { key: 'Cake', image: 'https://i.pinimg.com/236x/ed/d7/8e/edd78eb56e8d6e5b113df238f5958d67.jpg' },
      { key: 'Ice Cream', image: 'https://i.pinimg.com/236x/40/6f/f0/406ff02a11e43d2a7310064381658e8f.jpg' },
    ],
    title: 'Desserts',
    bgColor: '#FFDAB9',
    icon: 'ice-cream',
  },
  {
    data: [
      { key: 'Barbie', image: 'https://i.pinimg.com/736x/1b/75/eb/1b75eb858a6ba000fa1825a7c8e96a76.jpg' },
      { key: 'Teddy Bear', image: 'https://i.pinimg.com/736x/c3/b0/5f/c3b05f3852437522cef1d457c6570e18.jpg' },
    ],
    title: 'Dolls',
    bgColor: '#FFB6C1',
    icon: 'human-child',
  },
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
    flex: 1,
  },
  imageStyle: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={{ uri: item.image }} style={styles.imageStyle} />
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{ marginBottom: 50, margin: 10 }}>
        <StatusBar hidden={true} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                  <Icon name={icon} size={24} color="#000" />
                  <Text style={styles.headerText}>{title}</Text> {/* Fixed issue */}
                </View>
            )}
        />
      </View>
  );
};

export default App;
