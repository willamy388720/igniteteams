import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTIONS } from "@storage/storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playerGetByGroup(group);

    const filtered = storage.filter((player) => player.name !== playerName);

    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTIONS}-${group}`, players);
  } catch (error) {
    throw error;
  }
}
