---
id: "common_web_core_messaging_composers_EventComposer.EventComposer"
title: "Class: EventComposer<MsgType>"
sidebar_label: "EventComposer"
custom_edit_url: null
---

[common/web/core/messaging/composers/EventComposer](../modules/common_web_core_messaging_composers_EventComposer.md).EventComposer

Composer for ``Event`` messages.

## Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Event`](common_web_core_messaging_Event.Event.md) |

## Hierarchy

- [`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\>

  ↳ **`EventComposer`**

## Constructors

### constructor

• **new EventComposer**<`MsgType`\>(`originID`, `messageBus`, `msgType`, `params?`, `chain?`): [`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<`MsgType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Event`](common_web_core_messaging_Event.Event.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `originID` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | `undefined` | The component identifier of the origin of newly created messages. |
| `messageBus` | [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md) | `undefined` | The global message bus to use. |
| `msgType` | [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<`MsgType`\> | `undefined` | The message type. |
| `params` | `Record`<`string`, `any`\> | `{}` | Additional message parameters. |
| `chain` | ``null`` \| [`Message`](common_web_core_messaging_Message.Message.md) | `null` | A message that acts as the *predecessor* of the new message. Used to keep the same trace for multiple messages. |

#### Returns

[`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<`MsgType`\>

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[constructor](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#constructor)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:29](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L29)

## Properties

### \_chain

• `Protected` **\_chain**: ``null`` \| [`Message`](common_web_core_messaging_Message.Message.md)

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_chain](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_chain)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:18](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L18)

___

### \_messageBus

• `Protected` **\_messageBus**: [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md)

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_messageBus](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_messagebus)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:14](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L14)

___

### \_msgType

• `Protected` **\_msgType**: [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<`MsgType`\>

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_msgType](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_msgtype)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:16](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L16)

___

### \_originID

• `Protected` **\_originID**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_originID](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_originid)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:13](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L13)

___

### \_params

• `Protected` **\_params**: `Record`<`string`, `any`\>

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_params](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_params)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:17](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L17)

## Methods

### before

▸ **before**(`cb`): [`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<`MsgType`\>

Adds a callback that will be called immediately before the message is dispatched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`BeforeDispatchCallback`](../modules/common_web_core_messaging_composers_MessageComposer.md#beforedispatchcallback) | The callback to add. |

#### Returns

[`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<`MsgType`\>

- This composer instance to allow call chaining.

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[before](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#before)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:46](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L46)

___

### compose

▸ **compose**(): `void`

#### Returns

`void`

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[compose](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#compose)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:73](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L73)

___

### createMetaInformation

▸ **createMetaInformation**(): [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Returns

[`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Overrides

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[createMetaInformation](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#createmetainformation)

#### Defined in

[common/web/core/messaging/composers/EventComposer.ts:10](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/EventComposer.ts#L10)

___

### emit

▸ **emit**(`target`): `void`

Sends the built message through the message bus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Channel`](common_web_core_messaging_Channel.Channel.md) | The target of the message. |

#### Returns

`void`

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[emit](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#emit)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:56](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L56)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[verify](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#verify)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:70](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/composers/MessageComposer.ts#L70)
