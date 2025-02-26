import DataPacket from './DataPacket.js';
import Identifiers from '../Identifiers.js';

import { biome_definitions } from '@jsprismarine/bedrock-data';

export default class BiomeDefinitionListPacket extends DataPacket {
    public static NetID = Identifiers.BiomeDefinitionListPacket;

    private cachedNBT!: Buffer;

    public encodePayload() {
        this.write(this.cachedNBT || (this.cachedNBT = biome_definitions));
    }
}
