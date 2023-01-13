import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTIONS } from "@storage/storageConfig";

export async function groupGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTIONS);

    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
