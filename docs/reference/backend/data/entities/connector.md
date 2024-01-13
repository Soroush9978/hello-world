---
sidebar_label: connector
title: data.entities.connector
---

## Connector Objects

```python
@dataclass_json

@dataclass(frozen=True, kw_only=True)
class Connector()
```

Data for a single **Connector**.

**Attributes**:

- `connector_id` - The unique connector identifier.
- `name` - The name of the connector.
- `description` - An optional connector description.

