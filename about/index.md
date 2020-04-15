---
layout: page
title: About BushelScript
navbar_title: About
permalink: /about/
---

<div style="text-align: initial" markdown="1">

**BushelScript** is best described as a next-generation open-source alternative to [AppleScript](https://en.wikipedia.org/wiki/AppleScript). It is a macOS scripting language designed with the following principal goals in mind:

- Be useful:
  - Displace AppleScript for most practical AppleEvent scripting.
  - Supersede AppleScript as "the ultimate duct tape" by integrating with tons of different scripting interfaces.
  - Add practically useful features on top of an AppleScript-lookalike base.
- Be predictable:
  - Be open-source and driven by the community.
  - Be straightforward to read and minimally confusing to write and debug.
  - Avoid obscure, lacking or useless features.
- Be accessible:
  - Don't force novice scripters to read code with unintelligible symbols.
  - Don't force experienced programmers into a natural language paradigm.
  - Avoid alienating non-English speakers.
  - Seamlessly translate between programmer/user registers and different natural language bases.

## Backstory

Many macOS apps, including those preinstalled by Apple, have powerful scripting interfaces that parallel their GUI. These interfaces are used via messages called _AppleEvents_, which are sent back and forth between applications.

AppleEvents were developed so that users could automate any task that they would otherwise perform manually. The project was in many ways a spectacular success, and it even survived a foundational rewrite of Apple's flagship operating system. Yet the user's gateway to this venerable automation system, its scripting language, is to this day left sorely and bafflingly lacking.

AppleScript is peculiar, irregular, and notoriously difficult to learn. Its only official description is an opaque and wordy document on Apple's Developer site, and scouring aging websites for the correct incantations is a horrendously regular activity.

What's more, Apple has altogether ceased updating or improving AppleScript. The only recent changes have been security patches, the last of which occurred in 2017. A grand total of zero engineering efforts appear to be devoted to it.

Yet, AppleEvent support in applications is arguably strong as ever. What can be done about this unfortunate state of affairs?

### AppleScript isn't the only way

AppleEvents interfaces can, with enough work, be exposed through any programming language. [`Appscript`](http://appscript.sourceforge.net) is an excellent but defunct example of this. Apple themselves created [JavaScript for Automation](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/Introduction.html) but quickly abandoned it. All of this is to say that "AppleEvents without AppleScript" has very much been done before and can be done again.

### We can do it ourselves

It has been my pet project for the last couple of years to create a modern and open-source alternative to the unmaintained and arcane nightmare that is AppleScript. The truth is, AppleScript will remain the dominant AppleEvent shell for years to come if nothing else succeeds at displacing it.

It is my humble belief that only an open-source, community-driven project could ever manage this great feat. Behind closed doors, such a project ends up rotting away; and even in the open, if collaboration is not fostered and few understand its inner workings, the project dies when its author moves on.

### My answer

BushelScript aims to be open-source and driven by a community of users. It is actively worked on and has comprehensive documentation. It is learnable and accessible; it is predictable and regular; and it is useful and trivial to integrate with more mature solutions.

## Get started with BushelScript

Check out the [help site](/help/) for guides, reference material, and a community Discord server. Or go to the [GitHub page](https://github.com/BushelScript/BushelScript) to try out a release, report a bug, or hack on the code.

If you have feedback, please do not hesitate to email bushelscript-feedback[at]outlook.com, or join the [Discord server](https://discord.gg/xdyCK9t) and I'll happily chat with you.

Thanks for your interest, and together we can do great things.

## FAQ

### Why "BushelScript"?

Since the language is supposed to be a next-generation alternative to AppleScript, I wanted to pun off of that name. For the first few months of the project's life, I called it "AppleScript+". However, I eventually realized that this name could cause trademark issues. The code needed to be scrapped and started from scratch anyway, so I decided to rename it after the [bushel basket](https://en.wikipedia.org/wiki/Bushel), the container of choice for selling agricultural commodities such as apples at farmers' markets and the like.

### What is a "language module"?

This is currently an internal generalization that I hope to make use of soon. Each language module essentially defines a unique syntax for the common "Bushel Language" foundation (we need a better name for this). Language modules each compile code down to a shared representation, which can then be run or pretty printed by the Core with no additional code required. Each language module is also able to reformat code from this shared representation into its own syntax, and through this mechanism, code can (in theory) be seamlessly translated from one syntax set into the other.

There are two primary usability targets of the language module system:

1. Programmer/user registers. Users who are novice scripters really appreciate the English-like syntax of AppleScript, but programmers generally despise it. We can offer language modules that cater to each.
2. English/français/español… etc., etc. Not everyone is comfortable with English, and it would be great to be sensitive to that and offer scripting languages based on other natural languages.

</div>
