# Gulu UI

[Official Documentation](https://frankfang.github.io/gulu/)

Gulu UI is a different kind of UI framework.

This UI framework is designed for "source code readers". If it's helpful to you, please don't hesitate to star it.

In other words, the purpose of creating this framework is to help frontend beginners learn how to build UI components. All the code aims for readability.

1. You can learn the process of building this framework by examining each commit.
2. You can also learn through the [recorded videos](https://xiedaimala.com/courses/6d63da67-6eea-4711-aeb4-0c3a949341dc) I made
   (Sorry, the videos are paid due to the significant amount of time spent on producing them. However, the screencasts of the project setup process are **free**, and they can help you quickly get started with this project.)

If you want to start from the first commit, please click [here](https://github.com/FrankFang/gulu/commits/master?after=36fbd6867d0a223184ad67e3d2bc3569e88847e0+104).

If you have any questions about the code, feel free to [raise an issue](https://github.com/frankfang/gulu/issues), and I will answer your questions. You can also join the group for consultation at the end of this article.

This UI framework is implemented based on Vue 2.

Note: The code of this UI framework is not yet fully completed (currently about 50% done), so please do not use it in a production environment.

## What can you learn

1. Engineering concepts such as unit testing, code coverage, and continuous integration.
2. Technical concepts such as refactoring, TDD/BDD, design patterns, and one-way data flow.
3. Almost all the features of Vue, and a deep understanding of these features rather than just a shallow understanding.

## Available Components

* Simple Components: Button, Input, Grid, Layout, Toast, Tabs, Popover, Accordion (code completed)
* Advanced Components: Cascader, Carousel, Responsive Navbar, Pagination, Form Validation, Table, Image Upload, Sticky, Tree, Suggestion, Datepicker (code not completed)
* Others: Router, State Management (code not completed)

Note: This is the current plan, and the specific components to be completed may differ from the above.

## Project Features

1. Continuous integration using Travis CI.
2. Rich unit tests with an expected test coverage of over 90% upon project completion.
3. Self-explanatory code that can be understood even without comments.
4. Initially built with Parcel for easy onboarding of beginners, later switched to Vue CLI 3 to achieve more functionalities.

## Background

A few years ago, I published an article called "[Learn Frontend the Hard Way](https://juejin.im/post/58ef6004ac502e006c16f2d6)". At that time, I felt that although there were many good libraries in the open-source community, their source code was not suitable for **beginners** to read.

So I spent my spare time creating a few wheels with native JS and put them on GitHub. Unexpectedly, hundreds of people followed and hoped that I could release more detailed tutorials.

But at that time, I didn't have time to create more detailed tutorials.

Now finally... I'm still busy, but I've decided to record videos on "building wheels" every Saturday and Sunday.

This time, in order to follow the trend of frontend development, I directly used Vue 2 to build the wheels. If you are learning Vue 2, then the source code of Gulu UI will be very suitable for you to read.

## Visual Design

This UI framework draws inspiration from some mature UI frameworks (such as Framework7, Element UI, and Ant Design) in terms of appearance. After simplification, I created my own [visual design draft](https://www.yuque.com/u29422/gulu/artboards/22283).

If you find any shortcomings in the visual design draft, you can leave a comment directly on it, and I will see it.

## Why is it called Gulu UI

Because "Gulu" means "wheel" in Chinese.

## Source Code Study

1. Install dependencies
    ```
    yarn install
    ```

2. Start dev server
    ```
    yarn serve
    ```
