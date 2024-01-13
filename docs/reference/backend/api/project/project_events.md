---
sidebar_label: project_events
title: api.project.project_events
---

## ProjectsListEvent Objects

```python
@Message.define("event/project/list")
class ProjectsListEvent(Event)
```

Emitted whenever the user&#x27;s projects list has been updated.

**Arguments**:

- `projects` - List of all projects.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          *,
          projects: typing.List[Project],
          chain: Message | None = None) -> EventComposer
```

Helper function to easily build this message.

