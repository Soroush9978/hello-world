---
id: "common_web_core_messaging_composers_MessageComposer.MessageComposer"
title: "Class: MessageComposer<MsgType>"
sidebar_label: "MessageComposer"
custom_edit_url: null
---

[common/web/core/messaging/composers/MessageComposer](../modules/common_web_core_messaging_composers_MessageComposer.md).MessageComposer

A class to collect all information necessary to create and emit a message.

## Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Message`](common_web_core_messaging_Message.Message.md) |

## Hierarchy

- **`MessageComposer`**

  ↳ [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)

  ↳ [`CommandReplyComposer`](common_web_core_messaging_composers_CommandReplyComposer.CommandReplyComposer.md)

  ↳ [`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)

## Constructors

### constructor

• **new MessageComposer**<`MsgType`\>(`originID`, `messageBus`, `msgType`, `params?`, `chain?`): [`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Message`](common_web_core_messaging_Message.Message.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `originID` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | `undefined` | The component identifier of the origin of newly created messages. |
| `messageBus` | [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md) | `undefined` | The global message bus to use. |
| `msgType` | [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<`MsgType`\> | `undefined` | The message type. |
| `params` | `Record`<`string`, `any`\> | `{}` | Additional message parameters. |
| `chain` | ``null`` \| [`Message`](common_web_core_messaging_Message.Message.md) | `null` | A message that acts as the *predecessor* of the new message. Used to keep the same trace for multiple messages. |

#### Returns

[`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\>

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:29](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L29)

## Properties

### \_beforeCallbacks

• `Private` **\_beforeCallbacks**: [`BeforeDispatchCallback`](../modules/common_web_core_messaging_composers_MessageComposer.md#beforedispatchcallback)[] = `[]`

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:20](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L20)

___

### \_chain

• `Protected` **\_chain**: ``null`` \| [`Message`](common_web_core_messaging_Message.Message.md)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:18](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L18)

___

### \_messageBus

• `Protected` **\_messageBus**: [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:14](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L14)

___

### \_msgType

• `Protected` **\_msgType**: [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<`MsgType`\>

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:16](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L16)

___

### \_originID

• `Protected` **\_originID**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:13](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L13)

___

### \_params

• `Protected` **\_params**: `Record`<`string`, `any`\>

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:17](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L17)

## Methods

### before

▸ **before**(`cb`): [`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\>

Adds a callback that will be called immediately before the message is dispatched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`BeforeDispatchCallback`](../modules/common_web_core_messaging_composers_MessageComposer.md#beforedispatchcallback) | The callback to add. |

#### Returns

[`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\>

- This composer instance to allow call chaining.

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:46](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L46)

___

### compose

▸ **compose**(): `void`

#### Returns

`void`

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:73](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L73)

___

### createMessage

▸ **createMessage**(`target`): [`Message`](common_web_core_messaging_Message.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Channel`](common_web_core_messaging_Channel.Channel.md) |

#### Returns

[`Message`](common_web_core_messaging_Message.Message.md)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:78](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L78)

___

### createMetaInformation

▸ **createMetaInformation**(): [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Returns

[`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:76](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L76)

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

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:56](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L56)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:70](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L70)
