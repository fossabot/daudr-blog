---
title: "ngFor Done Right"
description: When dealing with lists in templates, ngFor saves us a lot of time, but it could be a real pain if used wrong, read this article to know hot use it right
tags: ["angular", "code", "guide", "frontend", "performance"]
keywords: ["angular", "code", "guide", "frontend", "performance"]
cover_image: "https://unsplash.com/photos/ij5_qCBpIVY"
date: "2019-06-24T09:27:10.759Z"
id: "ngfor-done-right"
---

When dealing with lists in templates, ngFor saves us a lot of time, but it could be a real pain if used wrong, read this article to know hot use it right.

![article logo](ngfor.jpg)

> Photo by [Kolleen Gladden](https://unsplash.com/photos/ij5_qCBpIVY) on [Unsplash](https://unsplash.com)

All the informations on this article can also be found in the [docs](https://angular.io/api/common/NgForOf)

## Prerequisites

During this guide we will use an interface, let's call it `Item` that'll look something like this:

```typescript
export interface Item {
  _id: string
  name: string
}
```

and we will use some `utils` mock and functions that'll help us later:

```typescript
export const items: Item[] = [{ _id: "a2fHdS8P", name: "Mike" }]

export const makeRandomId = (): string => {
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength: number = characters.length
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const makeRandomName = (): string => {
  const names = [
    "Sara",
    "Mattia",
    ...
  ]

  return names[Math.floor(Math.random() * names.length)]
}

export const itemsLong: Item[] = [
  {
    _id: makeRandomId(),
    name: makeRandomName(),
  },
  {
    _id: makeRandomId(),
    name: makeRandomName(),
  },
  ...
]
```

## First of all trackBy

`trackBy` is a function that defines how to track changes for items in the iterable. That means that we can use it to know exactly which element in a list are being changed, after a network call or whatsoever.
We implement it by defining a function in our `.ts` file:

```typescript
trackByFunction (index, item) {
  return item._id;
}
```

then in your `.html` add your new function

```html
<div *ngFor="let item of items; trackBy: trackByFunction"></div>
```

## even and odd comes next

The variables `even` and `odd` are mainly used for styling the components.
For example when we have a table and we want to make it more readable we can use this varibles to change the background color of the rows.

```html
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr
      *ngFor="let item of items; trackBy: trackBy; odd as odd; even as even"
      [ngClass]="{ 'odd': odd, 'even': even }"
    >
      <td>{{ item._id }}</td>
      <td>{{ item.name }}</td>
    </tr>
  </tbody>
</table>
```

```scss
.odd {
  background-color: rgba(255, 0, 255, 0.45);
}

.even {
  background-color: rgba(0, 0, 0, 0.45);
}
```

## Tell me about first and last

Just like `even` and `odd`, `first` and `last` variables are used for styling purposes too.
Let's use the already created table and set the classes only for the first and last row:

```html
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr
      *ngFor="let item of items; trackBy: trackBy; first as first; last as last"
      [ngClass]="{ 'first': first, 'last': last }"
    >
      <td>{{ item._id }}</td>
      <td>{{ item.name }}</td>
    </tr>
  </tbody>
</table>
```

```scss
.first {
  background-color: rgba(0, 0, 255, 0.45);
}

.last {
  background-color: rgba(0, 255, 0, 0.45);
}
```

## Don't forget the index

All the code used in this guide can be found on [Stackblitz](https://stackblitz.com/edit/ngfor-done-right) and [GitHub](https://github.com/Daudr/ngfor-done-right)
