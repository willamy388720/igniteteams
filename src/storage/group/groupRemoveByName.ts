import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTIONS, GROUP_COLLECTIONS } from "@storage/storageConfig";
import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupGetAll();

    const groups = storedGroups.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTIONS, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTIONS}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
