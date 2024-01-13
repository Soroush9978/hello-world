---
sidebar_label: project_commands
title: api.project.project_commands
---

## ListProjectsCommand Objects

```python
@Message.define("command/project/list")
class ListProjectsCommand(Command)
```

Command to fetch all projects of the current user.

**Notes**:

  Requires a ``ListProjectsReply`` reply.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          *,
          chain: Message | None = None) -> CommandComposer
```

Helper function to easily build this message.

## ListProjectsReply Objects

```python
@Message.define("command/project/list/reply")
class ListProjectsReply(CommandReply)
```

Reply to ``ListProjectsCommand``.

**Arguments**:

- `projects` - List of all projects.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          cmd: ListProjectsCommand,
          *,
          projects: typing.List[Project],
          success: bool = True,
          message: str = "") -> CommandReplyComposer
```

Helper function to easily build this message.

## CreateProjectCommand Objects

```python
@Message.define("command/project/create")
class CreateProjectCommand(Command)
```

Command to create a new project.

**Arguments**:

- `title` - The title of the project.
- `description` - An optional project description.
- `options` - The project options.
  

**Notes**:

  Requires a ``CreateProjectReply`` reply.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          *,
          title: str,
          description: str,
          options: ProjectOptions,
          chain: Message | None = None) -> CommandComposer
```

Helper function to easily build this message.

## CreateProjectReply Objects

```python
@Message.define("command/project/create/reply")
class CreateProjectReply(CommandReply)
```

Reply to ``CreateProjectCommand``.

**Arguments**:

- `project_id` - The ID of the created project.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          cmd: CreateProjectCommand,
          *,
          project_id: ProjectID,
          success: bool = True,
          message: str = "") -> CommandReplyComposer
```

Helper function to easily build this message.

## UpdateProjectCommand Objects

```python
@Message.define("command/project/update")
class UpdateProjectCommand(Command)
```

Command to update an existing project.
Note that the project features are updated using a separate ``UpdateProjectFeaturesCommand`` message.

**Arguments**:

- `project_id` - The ID of the project to update.
- `title` - The title of the project.
- `description` - An optional project description.
- `options` - The project options.
  

**Notes**:

  Requires an ``UpdateProjectReply`` reply.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          *,
          project_id: ProjectID,
          title: str,
          description: str,
          options: ProjectOptions,
          chain: Message | None = None) -> CommandComposer
```

Helper function to easily build this message.

## UpdateProjectReply Objects

```python
@Message.define("command/project/update/reply")
class UpdateProjectReply(CommandReply)
```

Reply to ``UpdateProjectCommand``.

**Arguments**:

- `project_id` - The ID of the updated project.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          cmd: UpdateProjectCommand,
          *,
          project_id: ProjectID,
          success: bool = True,
          message: str = "") -> CommandReplyComposer
```

Helper function to easily build this message.

## DeleteProjectCommand Objects

```python
@Message.define("command/project/delete")
class DeleteProjectCommand(Command)
```

Command to delete a project of the current user.

**Arguments**:

- `project_id` - The ID of the project to delete.
  

**Notes**:

  Requires a ``DeleteProjectReply`` reply.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          *,
          project_id: ProjectID,
          chain: Message | None = None) -> CommandComposer
```

Helper function to easily build this message.

## DeleteProjectReply Objects

```python
@Message.define("command/project/delete/reply")
class DeleteProjectReply(CommandReply)
```

Reply to ``DeleteProjectCommand``.

**Arguments**:

- `project_id` - The ID of the deleted project.

#### build

```python
@staticmethod
def build(message_builder: MessageBuilder,
          cmd: DeleteProjectCommand,
          *,
          project_id: ProjectID,
          success: bool = True,
          message: str = "") -> CommandReplyComposer
```

Helper function to easily build this message.

