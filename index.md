---
layout: main
description: BushelScript is a next-generation open-source alternative to AppleScript.
---

# BushelScript

### Automate macOS to new heights

<img src="assets/editor-demo.gif" alt="BushelScript Editor demo" class="editor-demo">

<h4 style="font-weight: normal">
  <p>BushelScript is a next-generation open-source alternative to <a href="https://en.wikipedia.org/wiki/AppleScript">AppleScript</a>,<br>
  the language that enables deep automatic control of macOS</p>
</h4>

#### [About BushelScript](/about/)

---

#### Sample BushelScript programs

<div class="code-showcase-container" markdown="1">
  <div class="code-showcase" style="display: block;" markdown="1">
```applescript
-- Display information.
let hello world be "Hello, world!"
let my message be "This creates an alert box in BushelScript."

alert hello world message my message buttons {"Got it"}
```
  </div>
  <div class="code-showcase" markdown="1">
```applescript
-- Draft an email.
use app Mail
let the recipient be "bob@example.com"
let the subject be "Hello from BushelScript!"

tell Mail
  tell make new outgoing message with properties {subject: the subject}
    make new to recipient with properties {address: the recipient}
  end
end
```
  </div>
  <div class="code-showcase" markdown="1">
```applescript
-- Eject a disk.
use app Finder
let disk name be "External HD"

tell Finder to eject disk named disk name 
notification "Disk '" & disk name & "' ejected."
```
  </div>
  <div class="code-showcase" markdown="1">
```applescript
-- Find large files.
#!bash
mdfind -onlyin ~ "kMDItemPhysicalSize > 1000000" |
  wc -l |
  ruby -pe '$_.strip!'
#!
let count be that

alert "Your home folder has " & count & "items over 1 MB."
```
  </div>
  <div class="code-showcase" markdown="1">
```applescript
-- Search for songs.
use app Music

name of every track of Music
join that by "`"
#!ruby
keyword = 'Christmas'
print gets
  .split('`')
	.filter {|item| item =~ /#{keyword}/i }
  .join("\n")
```
  </div>
</div>

<script src="code-showcase.js"></script>

---

#### Check out the [help site](/help/) for guides, reference material, and other docs

---

#### Grab the latest beta release [here](https://github.com/BushelScript/BushelScript/releases)

The latest version is at the top of the page.

#### Alternatively, [build from source](https://github.com/BushelScript/BushelScript) (requires Xcode)

---

#### <a href="https://github.com/{{ site.github_username| cgi_escape | escape }}"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}"></use></svg> <span class="username">{{ site.github_username| escape }}</span></a>

<h4>
  <a class="github-button" href="https://github.com/BushelScript/BushelScript/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch BushelScript/BushelScript on GitHub">Watch</a>
  <a class="github-button" href="https://github.com/BushelScript/BushelScript" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star BushelScript/BushelScript on GitHub">Star</a>
  <a class="github-button" href="https://github.com/BushelScript/BushelScript/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork BushelScript/BushelScript on GitHub">Fork</a>
  <a class="github-button" href="https://github.com/BushelScript/BushelScript/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue BushelScript/BushelScript on GitHub">Issue</a>
</h4>
