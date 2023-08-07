import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../components/Text/Text";

interface SubsectionComingSoonProps {
  title: string;
  description: string;
  imageSource: any;
}

const SubsectionComingSoon = ({
  title,
  description,
  imageSource,
}: SubsectionComingSoonProps) => {
  return (
    <View style={styles.container}>
      <Text variant="subtitle-semibold" style={styles.subtitleSection}>
        {title}
      </Text>
      <Text variant="default-body">{description}</Text>
      <Image source={imageSource} style={styles.imageSection} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  subtitleSection: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
  },
  imageSection: {
    resizeMode: "contain",
    width: 350,
    height: 250,
    marginTop: 10,
  },
});

export default SubsectionComingSoon;
