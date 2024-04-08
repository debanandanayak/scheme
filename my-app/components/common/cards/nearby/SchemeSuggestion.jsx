import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./suggestionCard";

const SchemeSuggestion = ({ scheme, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {scheme?.title}
        </Text>
        <Text style={styles.provider}>{scheme?.provider}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SchemeSuggestion;
