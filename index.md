---
layout: main
description: BushelScript is a next-generation open-source alternative to AppleScript.
---

<div class="center" id="top" markdown="1">
# **BushelScript**

### Next-generation open&#x2011;source&nbsp;AppleScript

<img src="assets/editor-demo.gif" alt="BushelScript Editor demo" class="editor-demo">

<h4>
  BushelScript is a next-generation open-source alternative to AppleScript.
  <br>
  <a href="about/">About BushelScript</a>
</h4>

---

<h4>Sample BushelScript programs</h4>

<div class="code-showcase-container" markdown="1">
  <div class="code-showcase" style="display: block;" markdown="1">
```applescript
use app Mail

tell Mail
  let message be make new outgoing message with properties {
    subject: "Hello from BushelScript!"
  }
  tell message to make new to recipient with properties {
    address: "bob@example.com"
  }
end
```
  </div>
  <div class="code-showcase" markdown="1">
```applescript
let hello world be "Hello, world!"
let my message be "This creates an alert box in BushelScript."

alert hello world message my message buttons {"Got it"}
```
  </div>
  <div class="code-showcase" markdown="1">
```applescript
use app Music

name of every track of Music
join that by ";"

#!ruby
  print gets
	  .split(';')
	  .filter {|item| item =~ /Love/i }
    .join("\n")
```
  </div>
  <div class="code-showcase" markdown="1">
```applescript
use app Finder

-- Name of disk to eject:
let disk name be "External HD"

tell Finder to eject disk named disk name 
alert "Disk ejected."
```
  </div>
</div>

<script src="code-showcase.js"></script>

---

</div>

## Get BushelScript

### Build from source

There are no prebuilt binaries just yet. You can always install from source, which is pretty straightforward if already have Xcode installed and know your way around the command line. For instructions see the [GitHub page](https://github.com/BushelScript/BushelScript).

## Learn BushelScript

Check out the [Quick Tutorial](quick-tutorial/) for the basics you need to start writing BushelScript scripts.

If you're looking to convert from AppleScript, consult the [AppleScript Translation Guide](applescript-translation/).

## Use BushelScript

### Language reference

There is no language reference yet! Use the tutorials for now. A complete auto-generated reference for each language module should eventually be part of BushelScript Editor as well as on this website.

## Help BushelScript

### Contributing

This project is an open one and contributions are most welcome. However, please note that there are no contribution guidelines/laundry lists yet, and internal documentation is sparse at this time. If you're still interested, please feel free to open a GitHub issue with your proposal!

## Follow BushelScript

### On GitHub

<div class="gh-box">
  <div class="gh-section gh-section-left">
    {%- include social.html -%}
    <div class="social-item">
      <a href="https://github.com/BushelScript/BushelScript">BushelScript/BushelScript</a>
    </div>
    <div class="social-item">
      <a href="https://github.com/BushelScript/bushelscript.github.io">BushelScript/bushelscript.github.io</a>
    </div>
  </div>

  <div class="gh-section gh-section-right">
    <a class="github-button" href="https://github.com/BushelScript/BushelScript/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch BushelScript/BushelScript on GitHub">Watch</a>
    <a class="github-button" href="https://github.com/BushelScript/BushelScript" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star BushelScript/BushelScript on GitHub">Star</a>
    <a class="github-button" href="https://github.com/BushelScript/BushelScript/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork BushelScript/BushelScript on GitHub">Fork</a>
    <a class="github-button" href="https://github.com/BushelScript/BushelScript/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue BushelScript/BushelScript on GitHub">Issue</a>
  </div>
</div>
