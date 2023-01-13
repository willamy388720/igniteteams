import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTIONS } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${PLAYER_COLLECTIONS}-${group}`
    );

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
