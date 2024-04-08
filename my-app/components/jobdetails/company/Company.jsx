import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { checkImageURL } from "../../../utils";

const Company = ({ title, description }) => {
  return (
    <View style={styles.container}>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{title || "N/A"}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <View style={styles.locationBox}>
          <Text style={styles.locationName}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
