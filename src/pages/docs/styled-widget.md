---
layout: ../../layouts/doc.astro
prev: adaptive
title: Comparing to Styled Widget
---
Niku is good, but how does it compares to Styled Widget?

Niku and Styled Widget both helps you with Developer Experience, provide you top-down styling widgets without nested parent.

But basically, Niku try to provide you to style all the widget while `Styled Widget` only handle Parent, Icon, and Text.

However, there are some key differences are:
#### Level of styling
- Styled Widget, handle styling only Parent, Icon, and Text.
- Niku, handle styling for many Widgets, ex: Parent, Text, Button, Column, TextFormField, etc.

#### Code Style
- Styled Widget, use dot notation
- Niku, use dot cascasde

#### Animation
- Styled Widget, yes with `.animation`.
- Niku, not yet, you have to handle that yourself (there's a roadmap for that)

#### Learning curve
- Styled Widget, simple straight forward
- Niku, a little bit more curve because of the new concept like hook and context switching between styling widget and parent

#### Constant
- Styled Widget, non constantable
- Niku, psuedo constantable with `.freezed`, `.on` and `NikuOn` (You can also use these with Styled Widget)

#### Property
- Styled Widget, method to set property, `allocate Builder if widget is animated` (always).
- Niku, direct setter, allocate `Builder only if context is need` (rarely).

#### Shortcut property
- Styled Widget, no
- Niku, yes, a lot, using macro

#### Naming convention
- Styled Widget, Native Flutter
- Niku, Native Flutter for fallback, TailwindCSS for shortcut, hook from React

#### Extract styling (seperate/reuse style)
- Styled Widget, no
- Niku, [yes](/docs/#niku), basically you can create something like CSS framework with Niku

#### Base Class
- Styled Widget, base on `AnimatedWidgetBaseState`
- Niku, base on `StatelessWidget`

#### Cross platform
Both supports every platform

#### Code Comparison
@see [Niku in comparison to Styled Widget on Japan Example](https://twitter.com/saltyAom/status/1492867748527218691?s=20&t=uJA6e91WCuorbb8jlonvJw)

#### Example
- Styled Widget, [@see example section](https://pub.dev/packages/styled_widget)
- Niku, [@see example on repo](https://github.com/SaltyAom/niku/tree/exp/heaven-and-earth/example/lib)

## Side note
Before settle down with which library to use, I highly recommended you to try [Styled Widget](https://pub.dev/packages/styled_widget) first, because both library try to assist you with just the same thing but if you don't usually need to handle styling of "others" widget much, you most likely wants to go with Styled Widget.

###### Note: Actually, Niku v1 does also use dot notation like `Division` (the previous version of `Styled Widget`) but both key difference is that Niku try to handle all of the widgets while `Styled Widget` mainly focused on `Parent` and `Text`.
