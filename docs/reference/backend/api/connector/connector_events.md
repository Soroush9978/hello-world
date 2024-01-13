---
sidebar_label: connector_events
title: api.connector.connector_events
---

## ConnectorsListEvent Objects

```python
@Message.define("event/connector/list")
class ConnectorsListEvent(Event)
```

Emitted whenever the list of available connectors has been updated.

**Arguments**:

- `connectors` - List of all connectors.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          *,
          connectors: typing.List[Connector],
          chain: Message | None = None) -> EventComposer
```

Helper function to easily build this message.

