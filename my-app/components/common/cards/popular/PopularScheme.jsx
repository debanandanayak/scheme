import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularSchemeCard.style";

const PopularScheme = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.location}> {item.provider}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularScheme;
