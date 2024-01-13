---
id: "frontend_src_data_stores_ConnectorsStore"
title: "Module: frontend/src/data/stores/ConnectorsStore"
sidebar_label: "frontend/src/data/stores/ConnectorsStore"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [connectorsStore](../namespaces/frontend_src_data_stores_ConnectorsStore.connectorsStore.md)

## Functions

### connectorsStore

▸ **connectorsStore**(`pinia?`, `hot?`): `Store`<``"connectorsStore"``, `_UnwrapAll`<`Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"connectors"``\>\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, `never`\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"reset"``\>\>

The connectors store for all connector-specific data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pinia?` | ``null`` \| `Pinia` |
| `hot?` | `StoreGeneric` |

#### Returns

`Store`<``"connectorsStore"``, `_UnwrapAll`<`Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"connectors"``\>\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, `never`\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"reset"``\>\>

#### Defined in

node_modules/pinia/dist/pinia.d.ts:639
