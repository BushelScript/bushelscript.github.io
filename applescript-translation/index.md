---
layout: page
title: AppleScript Translation Guide
permalink: /applescript-translation/
---

## Missing features

BushelScript is not yet a complete replacement for AppleScript. Notable missing features include:

- Proper error handling. Right now, when an error is encountered, the runtime tells the user about it if possible and subsequently crashes.
- Object-based range specifiers. Uncommon, but probably required for full AppleEvent feature parity.

And there are probably many more. This gap is slowly but surely being closed, and with time this list should (in theory) shrink to zero.

Do note that an AppleScript FFI is also in the works: this means that BushelScript will be able to natively call AppleScript handlers, just as it can send AppleEvent commands to applications. It will access AppleScript scripts through either the Script Libraries system or through a file specifier.

## NYW (not yet written!)

This guide is extremely important for the success of the project and should be written soon, but the Quick Tutorial is the bigger priority. Check back later!
