---
id: "common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation"
title: "Class: CommandReplyMetaInformation"
sidebar_label: "CommandReplyMetaInformation"
custom_edit_url: null
---

[common/web/core/messaging/meta/CommandReplyMetaInformation](../modules/common_web_core_messaging_meta_CommandReplyMetaInformation.md).CommandReplyMetaInformation

Message meta information specific to ``CommandReply``.

## Hierarchy

- [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

  ↳ **`CommandReplyMetaInformation`**

## Constructors

### constructor

• **new CommandReplyMetaInformation**(`entrypoint`, `requiresReply?`): [`CommandReplyMetaInformation`](common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `entrypoint` | [`MessageEntrypoint`](../enums/common_web_core_messaging_meta_MessageMetaInformation.MessageEntrypoint.md) | `undefined` | From where the message entered the system (locally or remotely). |
| `requiresReply` | `boolean` | `false` | Whether a reply is expected. |

#### Returns

[`CommandReplyMetaInformation`](common_web_core_messaging_meta_CommandReplyMetaInformation.CommandReplyMetaInformation.md)

#### Inherited from

[MessageMetaInformation](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md).[constructor](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md#constructor)

#### Defined in

[common/web/core/messaging/meta/MessageMetaInformation.ts:21](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/meta/MessageMetaInformation.ts#L21)

## Properties

### entrypoint

• `Readonly` **entrypoint**: [`MessageEntrypoint`](../enums/common_web_core_messaging_meta_MessageMetaInformation.MessageEntrypoint.md)

From where the message entered the system (locally or remotely).

#### Inherited from

[MessageMetaInformation](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md).[entrypoint](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md#entrypoint)

#### Defined in

[common/web/core/messaging/meta/MessageMetaInformation.ts:21](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/meta/MessageMetaInformation.ts#L21)

___

### requiresReply

• `Readonly` **requiresReply**: `boolean` = `false`

Whether a reply is expected.

#### Inherited from

[MessageMetaInformation](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md).[requiresReply](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md#requiresreply)

#### Defined in

[common/web/core/messaging/meta/MessageMetaInformation.ts:21](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/meta/MessageMetaInformation.ts#L21)
