// Show a list of 5 fruits using FlatList.
//  Make a list where tapping an item highlights it.
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const DATA = [
  { id: "1", title: "Apple" },
  { id: "2", title: "Banana" },
  { id: "3", title: "Cherry" },
  { id: "4", title: "Mango" },
  { id: "5", title: "Orange" },
];

export default function HighlightList() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const selected = item.id === selectedId;
    return (
      <TouchableOpacity
        style={[styles.row, selected && styles.rowSelected]}
        onPress={() => setSelectedId(item.id)}
        activeOpacity={0.7}
      >
        <Text style={[styles.text, selected && styles.textSelected]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        extraData={selectedId} // ensure re-render
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#101418" },
  row: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#1e2329",
  },
  rowSelected: {
    backgroundColor: "#2ecc71",
  },
  text: { color: "#e5e7eb", fontSize: 16 },
  textSelected: { color: "#0b0f14", fontWeight: "700" },
  sep: { height: 10 },
});
