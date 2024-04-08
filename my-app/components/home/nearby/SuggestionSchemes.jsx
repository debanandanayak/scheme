import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./suggestionSchems.style";
import { COLORS } from "../../../constants";
import SchemeSuggestion from "../../common/cards/nearby/SchemeSuggestion";
import useFetch from "../../../hook/useFetch";

const SuggestionSchemes = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("schemes", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Suggested Schemes</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((scheme) => (
            <SchemeSuggestion
              scheme={scheme}
              key={`suggestion-job-${scheme._id}`}
              handleNavigate={() => router.push(`/schemes/${scheme._id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default SuggestionSchemes;
