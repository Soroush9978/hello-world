---
id: "common_web_ui_notifications_OverlayNotifications.OverlayNotifications"
title: "Class: OverlayNotifications"
sidebar_label: "OverlayNotifications"
custom_edit_url: null
---

[common/web/ui/notifications/OverlayNotifications](../modules/common_web_ui_notifications_OverlayNotifications.md).OverlayNotifications

A helper class to display notifications using PrimeVue's Toast.

## Constructors

### constructor

• **new OverlayNotifications**(`comp`): [`OverlayNotifications`](common_web_ui_notifications_OverlayNotifications.OverlayNotifications.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comp` | [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\> | The global component. |

#### Returns

[`OverlayNotifications`](common_web_ui_notifications_OverlayNotifications.OverlayNotifications.md)

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:26](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L26)

## Properties

### \_timeout

• `Private` `Readonly` **\_timeout**: `number`

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:21](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L21)

___

### \_toast

• `Private` `Readonly` **\_toast**: `ToastServiceMethods`

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:20](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L20)

## Methods

### error

▸ **error**(`caption`, `message`, `sticky?`): `void`

Display an error notification.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `caption` | `string` | `undefined` | The notification caption. |
| `message` | `string` | `undefined` | The notification message. |
| `sticky` | `boolean` | `false` | Whether the notification will be sticky. |

#### Returns

`void`

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:72](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L72)

___

### info

▸ **info**(`caption`, `message`, `sticky?`): `void`

Display an info notification.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `caption` | `string` | `undefined` | The notification caption. |
| `message` | `string` | `undefined` | The notification message. |
| `sticky` | `boolean` | `false` | Whether the notification will be sticky. |

#### Returns

`void`

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:39](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L39)

___

### notify

▸ **notify**(`type`, `caption`, `message`, `sticky`): `void`

Display a notification.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`OverlayNotificationType`](../enums/common_web_ui_notifications_OverlayNotifications.OverlayNotificationType.md) | The notification type. |
| `caption` | `string` | The notification caption. |
| `message` | `string` | The notification message. |
| `sticky` | `boolean` | Whether the notification will be sticky. |

#### Returns

`void`

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:84](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L84)

___

### success

▸ **success**(`caption`, `message`, `sticky?`): `void`

Display a success notification.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `caption` | `string` | `undefined` | The notification caption. |
| `message` | `string` | `undefined` | The notification message. |
| `sticky` | `boolean` | `false` | Whether the notification will be sticky. |

#### Returns

`void`

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:50](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L50)

___

### warning

▸ **warning**(`caption`, `message`, `sticky?`): `void`

Display a warning notification.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `caption` | `string` | `undefined` | The notification caption. |
| `message` | `string` | `undefined` | The notification message. |
| `sticky` | `boolean` | `false` | Whether the notification will be sticky. |

#### Returns

`void`

#### Defined in

[common/web/ui/notifications/OverlayNotifications.ts:61](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/notifications/OverlayNotifications.ts#L61)
