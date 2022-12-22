const Identifiers = {
    Protocol: 560,

    MinecraftVersion: '1.19.51',

    LoginPacket: 0x01,
    PlayStatusPacket: 0x02,
    ServerToClientHandshakePacket: 0x03,
    ClientToServerHandshakePacket: 0x04,
    DisconnectPacket: 0x05,
    ResourcePacksInfoPacket: 0x06,
    ResourcePackStackPacket: 0x07,
    ResourcePackResponsePacket: 0x08,
    TextPacket: 0x09,
    SetTimePacket: 0x0a,
    StartGamePacket: 0x0b,
    AddPlayerPacket: 0x0c,
    AddActorPacket: 0x0d,
    RemoveActorPacket: 0x0e,
    AddItemActorPacket: 0x0f,
    TakeItemActorPacket: 0x11,
    MoveActorAbsolutePacket: 0x12,
    MovePlayerPacket: 0x13,
    RiderJumpPacket: 0x14,
    UpdateBlockPacket: 0x15,
    AddPaintingPacket: 0x16,
    TickSyncPacket: 0x17,
    LevelSoundEventPacketV1: 0x18,
    WorldEventPacket: 0x19,
    BlockEventPacket: 0x1a,
    ActorEventPacket: 0x1b,
    MobEffectPacket: 0x1c,
    UpdateAttributesPacket: 0x1d,
    InventoryTransactionPacket: 0x1e,
    MobEquipmentPacket: 0x1f,
    MobArmorEquipmentPacket: 0x20,
    InteractPacket: 0x21,
    BlockPickRequestPacket: 0x22,
    ActorPickRequestPacket: 0x23,
    PlayerActionPacket: 0x24,
    ActorFallPacket: 0x25,
    HurtArmorPacket: 0x26,
    SetActorDataPacket: 0x27,
    SetActorMotionPacket: 0x28,
    SetActorLinkPacket: 0x29,
    SetHealthPacket: 0x2a,
    SetSpawnPositionPacket: 0x2b,
    AnimatePacket: 0x2c,
    RespawnPacket: 0x2d,
    ContainerOpenPacket: 0x2e,
    ContainerClosePacket: 0x2f,
    PlayerHotbarPacket: 0x30,
    InventoryContentPacket: 0x31,
    InventorySlotPacket: 0x32,
    ContainerSetDataPacket: 0x33,
    CraftingDataPacket: 0x34,
    CraftingEventPacket: 0x35,
    GuiDataPickItemPacket: 0x36,
    AdventureSettingsPacket: 0x37,
    BlockActorDataPacket: 0x38,
    PlayerInputPacket: 0x39,
    LevelChunkPacket: 0x3a,
    SetCommandsEnabledPacket: 0x3b,
    SetDifficultyPacket: 0x3c,
    ChangeDimensionPacket: 0x3d,
    SetPlayerGameTypePacket: 0x3e,
    PlayerListPacket: 0x3f,
    SimpleEventPacket: 0x40,
    EventPacket: 0x41,
    SpawnExperienceOrbPacket: 0x42,
    ClientboundMapItemDataPacket: 0x43,
    MapInfoRequestPacket: 0x44,
    RequestChunkRadiusPacket: 0x45,
    ChunkRadiusUpdatedPacket: 0x46,
    ItemFrameDropItemPacket: 0x47,
    GameRulesChangedPacket: 0x48,
    CameraPacket: 0x49,
    BossEventPacket: 0x4a,
    ShowCreditsPacket: 0x4b,
    AvailableCommandsPacket: 0x4c,
    CommandRequestPacket: 0x4d,
    CommandBlockUpdatePacket: 0x4e,
    CommandOutputPacket: 0x4f,
    UpdateTradePacket: 0x50,
    UpdateEquipPacket: 0x51,
    ResourcePackDataInfoPacket: 0x52,
    ResourcePackChunkDataPacket: 0x53,
    ResourcePackChunkRequestPacket: 0x54,
    TransferPacket: 0x55,
    PlaySoundPacket: 0x56,
    StopSoundPacket: 0x57,
    SetTitlePacket: 0x58,
    AddBehaviorTreePacket: 0x59,
    StructureBlockUpdatePacket: 0x5a,
    ShowStoreOfferPacket: 0x5b,
    PurchaseReceiptPacket: 0x5c,
    PlayerSkinPacket: 0x5d,
    SubClientLoginPacket: 0x5e,
    AutomationClientConnectPacket: 0x5f,
    SetLastHurtByPacket: 0x60,
    BookEditPacket: 0x61,
    NPCRequestPacket: 0x62,
    PhotoTransferPacket: 0x63,
    ModalFormRequestPacket: 0x64,
    ModalFormResponsePacket: 0x65,
    ServerSettingsRequestPacket: 0x66,
    ServerSettingsResponsePacket: 0x67,
    ShowProfilePacket: 0x68,
    SetDefaultGameTypePacket: 0x69,
    RemoveObjectivePacket: 0x6a,
    SetDisplayObjectivePacket: 0x6b,
    SetScorePacket: 0x6c,
    LabTablePacket: 0x6d,
    UpdateBlockSyncedPacket: 0x6e,
    MoveActorDeltaPacket: 0x6f,
    SetScoreboardIdentityPacket: 0x70,
    SetLocalPlayerAsInitializedPacket: 0x71,
    UpdateSoftEnumPacket: 0x72,
    NetworkStackLatencyPacket: 0x73,
    ScriptCustomEventPacket: 0x75,
    SpawnParticleEffectPacket: 0x76,
    AvailableActorIdentifiersPacket: 0x77,
    LevelSoundEventPacketV2: 0x78,
    NetworkChunkPublisherUpdatePacket: 0x79,
    BiomeDefinitionListPacket: 0x7a,
    LevelSoundEventPacket: 0x7b,
    LevelEventGenericPacket: 0x7c,
    LecternUpdatePacket: 0x7d,
    AddEntityPacket: 0x7f,
    RemoveEntityPacket: 0x80,
    ClientCacheStatusPacket: 0x81,
    OnScreenTextureAnimationPacket: 0x82,
    MapCreateLockedCopyPacket: 0x83,
    StructureTemplateDataRequestPacket: 0x84,
    StructureTemplateDataResponsePacket: 0x85,
    UpdateBlockPropertiesPacket: 0x86,
    ClientCacheBlobStatusPacket: 0x87,
    ClientCacheMissResponsePacket: 0x88,
    EducationSettingsPacket: 0x89,
    EmotePacket: 0x8a,
    MultiplayerSettingsPacket: 0x8b,
    SettingsCommandPacket: 0x8c,
    AnvilDamagePacket: 0x8d,
    CompletedUsingItemPacket: 0x8e,
    NetworkSettingsPacket: 0x8f,
    PlayerAuthInputPacket: 0x90,
    CreativeContentPacket: 0x91,
    PlayerEnchantOptionsPacket: 0x92,
    ItemStackRequestPacket: 0x93,
    ItemStackResponsePacket: 0x94,
    PlayerArmorDamagePacket: 0x95,
    CodeBuilderPacket: 0x96,
    UpdatePlayerGameTypePacket: 0x97,
    EmoteListPacket: 0x98,
    PositionTrackingDBServerBroadcastPacket: 0x99,
    PositionTrackingDBClientRequestPacket: 0x9a,
    DebugInfoPacket: 0x9b,
    PacketViolationWarningPacket: 0x9c,
    MotionPredictionHintsPacket: 0x9d,
    AnimateEntityPacket: 0x9e,
    CameraShakePacket: 0x9f,
    PlayerFogPacket: 0xa0,
    CorrectPlayerMovePredictionPacket: 0xa1,
    ItemComponentPacket: 0xa2,
    FilterTextPacket: 0xa3,
    ClientboundDebugRendererPacket: 0xa4,
    RequestNetworkSettingsPacket: 0xc1
};

export default Identifiers;
