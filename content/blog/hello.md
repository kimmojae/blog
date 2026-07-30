---
title: 블로그를 다시 만들었다
description: Nuxt 4와 Tailwind CSS v4로 블로그 토대를 새로 구성했다.
date: 2026-07-30
---

# 블로그를 다시 만들었다

Nuxt 3 스캐폴딩을 걷어내고 Nuxt 4 위에 새로 올렸다. 이 글은 마크다운이
제대로 렌더링되는지 확인하기 위한 첫 글이다.

## 무엇이 바뀌었나

- Nuxt 3.15 → **4.5.1**
- Tailwind CSS v3(JS 설정) → **v4**(CSS 설정)
- `@nuxt/content` 3.0 → 3.15

`inline code`도 확인하고, 아래 블록도 확인한다.

```ts
const greeting: string = 'hello'
console.log(greeting)
```

> 인용문이 어떻게 보이는지도 확인한다.

1. 순서 있는 목록
2. 두 번째 항목

[외부 링크](https://nuxt.com)도 확인한다.
