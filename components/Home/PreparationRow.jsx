import { View, Text } from 'react-native'
import React from 'react'

export default function PreparationRow({ item }) {

    const preparationString = (item.preparation01);
    const prepa = preparationString.split(". ")

  return (
    <View>
      {prepa.map((prepastring , CategoriesRecipes) => (
        <Text key={CategoriesRecipes}>{prepastring}</Text>
      ))}
    </View>
  )
}




// import { View, Text } from "react-native";
// import React from "react";

// export default function PreparationRow({ item }) {
//   const preparationstring = item.preparation01;
//   const prepa = preparationstring.Split(". ");

//   return (
//     <View style={styles.viewcontainer}>
//       {prepa.map((prepastring, listCategories) => (
//         <Text style={styles.textname} key={listCategories}>
//           {prepastring}
//         </Text>
//       ))}
//     </View>
//   );
// }
