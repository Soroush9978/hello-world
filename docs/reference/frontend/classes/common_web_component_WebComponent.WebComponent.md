---
id: "common_web_component_WebComponent.WebComponent"
title: "Class: WebComponent<UserInterfaceType>"
sidebar_label: "WebComponent"
custom_edit_url: null
---

[common/web/component/WebComponent](../modules/common_web_component_WebComponent.md).WebComponent

Base class for all web components.

By default, an instance of ``UserInterfaceType`` is used to create the main UI handler. This can be overriden using the corresponding
template and constructor parameters.

Web applications are always based on this class. It mainly maintains an instance of the ``Core``, but also stores general information
about the application itself and the entire project.

## Type parameters

| Name | Type |
| :------ | :------ |
| `UserInterfaceType` | extends [`UserInterface`](common_web_ui_UserInterface.UserInterface.md) = [`UserInterface`](common_web_ui_UserInterface.UserInterface.md) |

## Hierarchy

- **`WebComponent`**

  ↳ [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md)

## Constructors

### constructor

• **new WebComponent**<`UserInterfaceType`\>(`env`, `compID`, `appRoot`, `userInterfaceType?`): [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<`UserInterfaceType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `UserInterfaceType` | extends [`UserInterface`](common_web_ui_UserInterface.UserInterface.md) = [`UserInterface`](common_web_ui_UserInterface.UserInterface.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `env` | [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer) | The global environment variables. |
| `compID` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | The identifier of this component. |
| `appRoot` | [`VueComponent`](../modules/common_web_component_WebComponent.md#vuecomponent) | The root (main) application component. |
| `userInterfaceType` | [`Constructable`](../interfaces/common_web_utils_Types.Constructable.md)<`UserInterfaceType`\> | The type of the user interface class. |

#### Returns

[`WebComponent`](common_web_component_WebComponent.WebComponent.md)<`UserInterfaceType`\>

#### Defined in

[common/web/component/WebComponent.ts:73](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L73)

## Properties

### \_core

• `Protected` `Readonly` **\_core**: [`Core`](common_web_core_Core.Core.md)

#### Defined in

[common/web/component/WebComponent.ts:61](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L61)

___

### \_data

• `Protected` `Readonly` **\_data**: [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

#### Defined in

[common/web/component/WebComponent.ts:59](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L59)

___

### \_router

• `Protected` `Readonly` **\_router**: `Router`

#### Defined in

[common/web/component/WebComponent.ts:62](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L62)

___

### \_userInterface

• `Protected` `Readonly` **\_userInterface**: `UserInterfaceType`

#### Defined in

[common/web/component/WebComponent.ts:64](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L64)

___

### \_vueApp

• `Protected` `Readonly` **\_vueApp**: `App`<`any`\>

#### Defined in

[common/web/component/WebComponent.ts:65](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L65)

___

### \_injectionKey

▪ `Static` `Private` `Readonly` **\_injectionKey**: typeof [`_injectionKey`](common_web_component_WebComponent.WebComponent.md#_injectionkey)

#### Defined in

[common/web/component/WebComponent.ts:57](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L57)

___

### \_instance

▪ `Static` `Private` **\_instance**: ``null`` \| [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<`any`\> = `null`

#### Defined in

[common/web/component/WebComponent.ts:56](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L56)

## Accessors

### data

• `get` **data**(): [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

A data helper object that stores useful component data and information.

#### Returns

[`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

#### Defined in

[common/web/component/WebComponent.ts:212](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L212)

___

### router

• `get` **router**(): `Router`

The global router.

#### Returns

`Router`

#### Defined in

[common/web/component/WebComponent.ts:219](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L219)

___

### userInterface

• `get` **userInterface**(): `UserInterfaceType`

The global user interface.

#### Returns

`UserInterfaceType`

#### Defined in

[common/web/component/WebComponent.ts:226](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L226)

___

### vue

• `get` **vue**(): `App`<`any`\>

The global Vue application instance.

#### Returns

`App`<`any`\>

#### Defined in

[common/web/component/WebComponent.ts:233](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L233)

___

### instance

• `get` **instance**(): [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\>

The global ``WebComponent`` instance.

#### Returns

[`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\>

**`Throws`**

Error - If no instance has been created.

#### Defined in

[common/web/component/WebComponent.ts:255](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L255)

## Methods

### configureDefaultRoutes

▸ **configureDefaultRoutes**(): `RouteRecordRaw`[]

#### Returns

`RouteRecordRaw`[]

#### Defined in

[common/web/component/WebComponent.ts:148](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L148)

___

### configureRoutes

▸ **configureRoutes**(): `RouteRecordRaw`[]

Sets up routes for the Vue router.

#### Returns

`RouteRecordRaw`[]

- The routes as an array; return `null` if the router shouldn't be used.

#### Defined in

[common/web/component/WebComponent.ts:157](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L157)

___

### createConfig

▸ **createConfig**(`env`): [`Configuration`](common_web_utils_config_Configuration.Configuration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer) |

#### Returns

[`Configuration`](common_web_utils_config_Configuration.Configuration.md)

#### Defined in

[common/web/component/WebComponent.ts:100](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L100)

___

### createRouter

▸ **createRouter**(): `Router`

#### Returns

`Router`

#### Defined in

[common/web/component/WebComponent.ts:113](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L113)

___

### createService

▸ **createService**<`CtxType`\>(`name`, `initializer?`, `contextType?`): [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

Creates and registers a new service.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CtxType` | extends [`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the service. |
| `initializer` | ``null`` \| (`svc`: [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>) => `void` | `null` | A function called to registered message handlers etc. after the service has been created. |
| `contextType` | [`Constructable`](../interfaces/common_web_utils_Types.Constructable.md)<`CtxType`\> | `undefined` | Can be used to override the default ``ServiceContext`` type. All message handlers associated with the new service will then receive instances of this type for their service context. |

#### Returns

[`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

#### Defined in

[common/web/component/WebComponent.ts:198](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L198)

___

### createUserInterface

▸ **createUserInterface**(`userInterfaceType`, `appRoot`): `UserInterfaceType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userInterfaceType` | [`Constructable`](../interfaces/common_web_utils_Types.Constructable.md)<`UserInterfaceType`\> |
| `appRoot` | [`VueComponent`](../modules/common_web_component_WebComponent.md#vuecomponent) |

#### Returns

`UserInterfaceType`

#### Defined in

[common/web/component/WebComponent.ts:120](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L120)

___

### createVueApp

▸ **createVueApp**(): `App`<`any`\>

#### Returns

`App`<`any`\>

#### Defined in

[common/web/component/WebComponent.ts:124](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L124)

___

### mount

▸ **mount**(`appElement?`): `void`

Mounts the Vue application in the given element.

Notes:
    This method must be called immediately after creating the main component instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `appElement` | `string` | `"#app"` | The HTML element ID used for mounting the root component. |

#### Returns

`void`

#### Defined in

[common/web/component/WebComponent.ts:169](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L169)

___

### run

▸ **run**(): `void`

Starts the component's execution cycles.

Notes:
    This method is automatically called by the framework.

#### Returns

`void`

#### Defined in

[common/web/component/WebComponent.ts:179](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L179)

___

### sanitizeComponentID

▸ **sanitizeComponentID**(`compID`): [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `compID` | [`UnitID`](common_web_utils_UnitID.UnitID.md) |

#### Returns

[`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Defined in

[common/web/component/WebComponent.ts:262](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L262)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

- The string representation of this component.

#### Defined in

[common/web/component/WebComponent.ts:272](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L272)

___

### injectComponent

▸ **injectComponent**<`CompType`\>(): `CompType`

The global ``WebComponent`` instance via Vue's injection mechanism.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CompType` | extends [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\> = [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\> |

#### Returns

`CompType`

**`Throws`**

Error - If no instance has been created.

#### Defined in

[common/web/component/WebComponent.ts:242](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/component/WebComponent.ts#L242)
