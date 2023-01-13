import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTIONS } from "@storage/storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playerGetByGroup(group);

    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
