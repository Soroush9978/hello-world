---
id: "common_web_core_messaging_composers_CommandComposer.CommandComposer"
title: "Class: CommandComposer<MsgType>"
sidebar_label: "CommandComposer"
custom_edit_url: null
---

[common/web/core/messaging/composers/CommandComposer](../modules/common_web_core_messaging_composers_CommandComposer.md).CommandComposer

Composer for ``Command`` messages.

## Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Command`](common_web_core_messaging_Command.Command.md) |

## Hierarchy

- [`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\>

  ↳ **`CommandComposer`**

## Constructors

### constructor

• **new CommandComposer**<`MsgType`\>(`originID`, `messageBus`, `msgType`, `params?`, `chain?`): [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Command`](common_web_core_messaging_Command.Command.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `originID` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | `undefined` | The component identifier of the origin of newly created messages. |
| `messageBus` | [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md) | `undefined` | The global message bus to use. |
| `msgType` | [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<`MsgType`\> | `undefined` | The message type. |
| `params` | `Record`<`string`, `any`\> | `{}` | Additional message parameters. |
| `chain` | ``null`` \| [`Message`](common_web_core_messaging_Message.Message.md) | `null` | A message that acts as the *predecessor* of the new message. Used to keep the same trace for multiple messages. |

#### Returns

[`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[constructor](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#constructor)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:29](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L29)

## Properties

### \_chain

• `Protected` **\_chain**: ``null`` \| [`Message`](common_web_core_messaging_Message.Message.md)

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_chain](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_chain)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:18](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L18)

___

### \_doneCallbacks

• `Private` **\_doneCallbacks**: [`CommandDoneCallback`](../modules/common_web_core_messaging_CommandReply.md#commanddonecallback)[] = `[]`

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:12](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L12)

___

### \_failCallbacks

• `Private` **\_failCallbacks**: [`CommandFailCallback`](../modules/common_web_core_messaging_CommandReply.md#commandfailcallback)[] = `[]`

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:13](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L13)

___

### \_messageBus

• `Protected` **\_messageBus**: [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md)

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_messageBus](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_messagebus)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:14](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L14)

___

### \_msgType

• `Protected` **\_msgType**: [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<`MsgType`\>

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_msgType](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_msgtype)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:16](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L16)

___

### \_originID

• `Protected` **\_originID**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_originID](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_originid)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:13](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L13)

___

### \_params

• `Protected` **\_params**: `Record`<`string`, `any`\>

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[_params](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#_params)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:17](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L17)

___

### \_timeout

• `Private` **\_timeout**: `number` = `0.0`

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:14](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L14)

## Methods

### before

▸ **before**(`cb`): [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

Adds a callback that will be called immediately before the message is dispatched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`BeforeDispatchCallback`](../modules/common_web_core_messaging_composers_MessageComposer.md#beforedispatchcallback) | The callback to add. |

#### Returns

[`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

- This composer instance to allow call chaining.

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[before](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#before)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:46](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L46)

___

### compose

▸ **compose**(): `void`

#### Returns

`void`

#### Inherited from

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[compose](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#compose)

#### Defined in

[common/web/core/messaging/composers/MessageComposer.ts:73](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L73)

___

### createMetaInformation

▸ **createMetaInformation**(): [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Returns

[`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Overrides

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[createMetaInformation](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#createmetainformation)

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:58](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L58)

___

### done

▸ **done**(`cb`): [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

Adds a *Done* callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`CommandDoneCallback`](../modules/common_web_core_messaging_CommandReply.md#commanddonecallback) | The callback to add. |

#### Returns

[`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

- This composer instance to allow call chaining.

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:23](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L23)

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

[common/web/core/messaging/composers/MessageComposer.ts:56](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/MessageComposer.ts#L56)

___

### failed

▸ **failed**(`cb`): [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

Adds a *Fail* callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`CommandFailCallback`](../modules/common_web_core_messaging_CommandReply.md#commandfailcallback) | The callback to add. |

#### Returns

[`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

- This composer instance to allow call chaining.

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:35](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L35)

___

### timeout

▸ **timeout**(`timeout`): [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

Assigns a *Done* callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | The timeout (in seconds). |

#### Returns

[`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`MsgType`\>

- This composer instance to allow call chaining.

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:47](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L47)

___

### verify

▸ **verify**(): `void`

#### Returns

`void`

#### Overrides

[MessageComposer](common_web_core_messaging_composers_MessageComposer.MessageComposer.md).[verify](common_web_core_messaging_composers_MessageComposer.MessageComposer.md#verify)

#### Defined in

[common/web/core/messaging/composers/CommandComposer.ts:52](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/composers/CommandComposer.ts#L52)
