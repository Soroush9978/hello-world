---
id: "common_web_ui_UserInterface.UserInterface"
title: "Class: UserInterface"
sidebar_label: "UserInterface"
custom_edit_url: null
---

[common/web/ui/UserInterface](../modules/common_web_ui_UserInterface.md).UserInterface

Class for overall user interface handling.

## Hierarchy

- **`UserInterface`**

  ↳ [`FrontendUserInterface`](frontend_src_ui_FrontendUserInterface.FrontendUserInterface.md)

## Constructors

### constructor

• **new UserInterface**(`router`, `appRoot`): [`UserInterface`](common_web_ui_UserInterface.UserInterface.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `router` | `Router` | The Vue router. |
| `appRoot` | [`VueComponent`](../modules/common_web_component_WebComponent.md#vuecomponent) | The root (main) application component. |

#### Returns

[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)

#### Defined in

[common/web/ui/UserInterface.ts:18](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/UserInterface.ts#L18)

## Properties

### \_mainView

• `Protected` `Readonly` **\_mainView**: [`MainView`](common_web_ui_views_main_MainView.MainView.md)

#### Defined in

[common/web/ui/UserInterface.ts:12](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/UserInterface.ts#L12)

## Accessors

### mainView

• `get` **mainView**(): [`MainView`](common_web_ui_views_main_MainView.MainView.md)

The main view.

#### Returns

[`MainView`](common_web_ui_views_main_MainView.MainView.md)

#### Defined in

[common/web/ui/UserInterface.ts:43](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/UserInterface.ts#L43)

## Methods

### configureMainRoute

▸ **configureMainRoute**(): `undefined` \| `RouteRecordRaw`

Supply additional options for the main route.

#### Returns

`undefined` \| `RouteRecordRaw`

- Additional route options.

#### Defined in

[common/web/ui/UserInterface.ts:27](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/UserInterface.ts#L27)

___

### createSubViews

▸ **createSubViews**(`router`): [`View`](common_web_ui_views_View.View.md)[]

Creates additional sub-views of the main view.

#### Parameters

| Name | Type |
| :------ | :------ |
| `router` | `Router` |

#### Returns

[`View`](common_web_ui_views_View.View.md)[]

- An array of all direct sub-views.

#### Defined in

[common/web/ui/UserInterface.ts:36](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/UserInterface.ts#L36)
