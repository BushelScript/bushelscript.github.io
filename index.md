---
layout: main
description: Script your life with BushelScript
---

# BushelScript

## A macOS scripting language with unparalleled connective power

<!-- <img src="assets/editor-demo.gif" alt="BushelScript Editor demo" class="editor-demo"> -->

---

<div class="code-showcase-container" markdown="1">
  <div class="code-showcase" style="display: block;" markdown="1">
```
use app Mail
let subject line be ask "Please enter a subject:"
tell Mail to make new outgoing message with properties {subject: subject line}
```
  </div>
  <div class="code-showcase" markdown="1">
```
use library Shell
let 1 MiB be pow 2 to the 20
tell Shell to export 1 MiB to "size"
#!bash
mdfind -onlyin ~ "kMDItemPhysicalSize > $size" | wc -l | ruby -pe '$_.strip!'
#!
"Your home folder has " & that & " items at least 1 MiB in size."
```
  </div>
  <div class="code-showcase" markdown="1">
```
use library Shell
use app Music
tell Shell to export (get name of every track of Music) to "track_names"
#!ruby
print ENV['track_names']
  .split(ENV['BUSHEL_LIST_DELIMITER'])
  .filter {|item| item =~ /Love/i }
  .join("\n")
```
  </div>
</div>

<script src="code-showcase.js"></script>

---

<h3>Script your life with</h3>
<div class="top-links-container">
  <p>
    <b>Native AppleEvent support:</b> Never write another line of <a href="https://en.wikipedia.org/wiki/AppleScript">AppleScript</a>.<br>
    <b>Shell integration:</b> Jump between different <a href="https://en.wikipedia.org/wiki/Unix_shell">shells</a> and <a href="https://en.wikipedia.org/wiki/List_of_interpreted_languages">interpreters</a> at will.<br>
    <b>Syntactic flexibility:</b> Write your code in <em>your</em> native language. (Coming soon)<br>
    <b>Continuous, open development:</b> Striving for transparency and valuing feedback.
  </p>
  <div class="hflex separated">
     <a href="/about/">About BushelScript</a>
     <a href="/help/">Learn BushelScript</a>
   </div>
  <div class="hflex">
    <div class="hflex separated">
      <a href="https://github.com/BushelScript/BushelScript/releases/latest">Latest Release</a>
      <a href="https://github.com/BushelScript/BushelScript">
        <!-- <svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}"></use></svg> -->
        Source Code
      </a>
    </div>
    <a class="github-button" href="https://github.com/BushelScript/BushelScript/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch BushelScript/BushelScript on GitHub">Watch</a>
    <a class="github-button" href="https://github.com/BushelScript/BushelScript" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star BushelScript/BushelScript on GitHub">Star</a>
    <a class="github-button" href="https://github.com/BushelScript/BushelScript/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue BushelScript/BushelScript on GitHub">Issue</a>
  </div>
</div>

---

Design of BushelScript

<div class="list-plain-style" markdown="1">

- [Command Model](https://igregory.ca/2021/bushel-command-model/)

</div>
