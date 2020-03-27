---
layout: page
title: Quick Tutorial
permalink: /quick-tutorial/
---

_A new, more complete help site is coming very soon… (early April at the latest)_  
_The biggest weakness of this project right now is lack of documentation, and I thoroughly intend to solve that._

Welcome to the BushelScript quick tutorial!

This guide will teach you to write your own BushelScript programs as quickly as possible. Through most of the tutorial, we’ll delve into some key ideas you’ll need to understand to make effective use of BushelScript. We’ll then finish by writing some useful, informative or otherwise interesting demo scripts. The latter part is optional, but encouraged if you want to get a more rounded feel for the language and ecosystem.

Please note that the guide is not finished. There are many features not shown off here, and many more features still to come. That said, everything described in this tutorial is mostly or completely functional, and all code samples compile and run as intended.

## Contents
1. [Obligatory “Hello, world!”](#obligatory-hello-world)
2. [Data flow](#data-flow)
3. [Variables](#variables)
4. [Control flow](#control-flow)
  - [Conditional expressions](#conditional-expressions)
  - [Conditional loops](#conditional-loops)
  - [Constant-bounded loops](#constant-bounded-loops)
  - [Iterative loops](#iterative-loops)
  - [Early return](#early-return)
5. [The default target](#the-default-target)
6. [Special objects](#special-objects)
  - [Absence of a value](#absence-of-a-value)
7. [Resources](#resources)
  - [Application resources](#application-resources)
8. [End](#end)
9. [Meta](#meta)

## Obligatory “Hello, world!”

Okay, you can have your “hello, world” program.

This first one uses the `alert` command to display an informative message box. It is analogous to AppleScript’s `display alert`, or (browser) JavaScript’s `alert()`.

```applescript
alert "Hello, world!"
```

An alternative “hello, world” in BushelScript uses the `log` command to print to the standard output. You will only see the results of this program if you run it from the command line (you can run `bushelscript --help` for assistance with that); a log view is planned for BushelScript Editor but is not yet implemented.

```applescript
log "Hello, world!"
```

## Data flow

<!--

Using variables in AppleScript has always been somewhat painful. A lot of seemingly valid variable names are defined as built-in or app-specific terminology, making naming a frequent annoyance and source of error and frustration for new users. One of the immediate design goals of BushelScript was to overcome this frankly silly limitation.

Of course, AppleScript also has its (sometimes random) strong points, and among them is the relatively obscure `result` property. In AppleScript, any value produced and subsequently discarded within a sequence of statements is temporarily and automatically stored to the script’s `result` property. This idea of implicit one-way data flow is extremely powerful, and has been around in one form or another for a long time, from UNIX command shells to macOS’s Automator or iOS’s Shortcuts (né Workflow). So, one of the first and best solutions to the problem of variable naming is to, frankly, cut the variables altogether whenever reasonable.

-->

In BushelScript, the `that` keyword refers to the result of the last executed expression in sequence. This example uses `that` to perform a long mathematical calculation without writing it all in one line.

```applescript
-- Item price
14.99
-- Quantity
that * 4
-- Plus tax
that + (that * 13/100)
```

This style is encouraged over the use of variables whenever reasonable. But don’t feel restricted to it.

## Variables

An important design difference from AppleScript arises here: in BushelScript, everything is, syntactically speaking, either a keyword, built into the language, or a term, defined in a dictionary[^terms-and-dictionaries]. This includes variable names, which must be defined as _variable terms_ using a `let` expression.

[^terms-and-dictionaries]: If you have a more general programming background, this notion of “terms” and “dictionaries” is really just AppleScript-y language for “identifier” and “scope”. If it’s easier to make that translation in your head, there’s really no harm done. The only major difference is exporting dictionaries, which will be explained further in the tutorial.

This example defines and assigns an integer to a variable named `num`:

```applescript
let num be 42
```

Note that, like most other “scripting” languages, variables themselves are not bound to any particular data type.

This example defines and assigns to various other variables:

```applescript
let integer be 42
let string be "example string"
let my favorite number be 3.141592654
```

Note that, even though `integer` and `string` are defined as data type names, a `let` expression can still define variables with those names. In BushelScript, terms can shadow other identically-named terms defined in other dictionaries. Likewise, all term names can contain spaces, such as `my favorite number`. The length and type of whitespace (aside from line breaks) separating the words in the term’s name is insignificant; i.e., <code>my&nbsp;&nbsp;&nbsp;favorite&#x09;&emsp;number</code> is exactly equivalent to `my favorite number`.

## Control flow

### Conditional expressions

Conditional expressions in BushelScript are fairly standard:

```applescript
if 1 = 2 then
  alert "Houston, we have an even bigger problem"
else if "hello" contains "p"
  alert "Whatever you say… (??)"
else
  if true
    alert "Everything is completely normal."
  else
    alert "thisisfine.jpg"
  end
end
```

`then` after the condition is optional.

### Conditional loops

```applescript
minutes of current date
repeat while (minutes of (let date be current date)) = that
  log seconds of date
end
```

### Constant-bounded loops

```applescript
let choices be {}
repeat 5 times
  choose from {"Choice A", "Choice B"}
  -- (this command is NYI!) add that to choices
end
```

### Iterative loops

```applescript
use app Finder
alert "Your currently connected disks are…"
tell Finder to get name of disks
repeat for disk name in that
  alert disk name
end
```

### Early return

Control automatically returns from a function after its last sequenced expression is evaluated. However, you can also return explicitly using the `return` keyword:

```applescript
-- Tells the user something on the hour
on notify user: for date
  if (minutes of date) ≠ 0 then return false
  
  alert "New hour!" message "It's now " & ((hours of date) as string) & ":00."
  true
end

repeat while not (notify user for current date)
  delay 60
end
```

## The default target

A `tell` expression pushes a new _default target_. The current default target:

- Is used as the direct object argument for command invocations when none is otherwise specified
- Is asked to handle commands not handled by the direct object (which is consulted first)

This example demonstrates the first point:

```applescript
tell "hello!"
  -- When no direct object is specified, the default command target
  -- is used as the direct object:
  alert
  -- When a direct object is specified, the default target is still
  -- consulted to handle the command but is otherwise ignored:
  alert "goodbye."
end
```

This example demonstrates the second point:

```applescript
tell 9
  -- Handled by the integer object '9':
  sqrt
end
```

## Special objects

### Absence of a value

`null` is the only value of the type `«type ae4:msng»`, which is called `missing value` in AppleScript. It indicates the absence of a meaningful value.

For instance, if a parameter is left unspecified in a function call, then its corresponding variable in the function body is set to `null`:

```applescript
on build greeting: to name
  "Hello" & (if name then (", " & name) else "") & "!"
end

build greeting --> "Hello!"
alert that

build greeting to "Billy" --> "Hello, Billy!"
alert that
```

## Resources

Resources are imported with a `use` expression. A `use` expression ensures its resource is accessible, generating a parse error if not. “Accessible” means different things for different resource types.

A `use` expression also defines a _resource term_ referring to the imported resource. Resource terms all have one or more of the following properties, depending on the resource type:

1. **Dictionary**. The term is a (usually exporting) dictionary.
2. **Command target**. The object that represents the resource handles special commands.
3. **Specifier root**. The object that represents the resource can be the root of specifiers (which are then called _remote specifiers_).

### Application resources

`use app` and `use application` are exactly equivalent, and import an application installed on the user’s system.

**Dictionary**: If the app defines AppleScript terminology, the application resource contains and exports it.  
**Command target**: Handles commands by sending them as AppleEvents to the application. May fail if the command or its arguments cannot be encoded as an AppleEvent.  
**Specifier root**: Remote specifiers rooted in applications specify objects within that application.

```applescript
use app Mail
use application Safari
-- Generates a parse error if Google Chrome is not installed:
use app Google Chrome
```

## End

Hopefully, you now have a pretty good feel for BushelScript, what you can do with it, and what some typical scripts might look like.

From the beginning, BushelScript was designed to eventually be a complete replacement for AppleScript. That said, if you want to try your hand at converting some scripts, definitely check out the [AppleScript Translation Guide](/applescript-translation/) for an overview of the languages’ differences, plus any pitfalls you might encounter during the conversion process.

## Meta

The source for this guide is [on GitHub](https://github.com/BushelScript/bushelscript.github.io). If you want to help improve it in any way, please open an issue or PR there.

---
