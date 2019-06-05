# Layout 布局
----

### 概述
栅格化设计是按照一定的规则吧页面分成固定的相同宽度，然后累出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。
一般使用 12栅格 系统，也有采用 8栅格 系统的，但是随着设备品目越来越大，传统的 12栅格 系统在一些业务场景下，无法解决元素
布局的问题， 所以就有了 24栅格 系统。 就是将页面分为24等分。

### 基础布局

<div class="demo-block">
  <w-row>
    <w-col :span="24"><div class="grid-content bg-purple-dark"></div></w-col>
  </w-row>
  <w-row class="m-10">
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="8"><div class="grid-content bg-purple-light"></div></w-col>
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
   <w-row class="m-10">
     <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
     <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
     <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
     <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
     <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
     <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
   </w-row>
</div>


::: demo
```html

<w-row>
 <w-col :span="24"><div class="grid-content bg-purple-dark"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
</w-row>

```
:::


### 分栏间隔

分栏之间存在间隔
Row 组件 提供 ```gutter``` 属性来指定每一栏之间的间隔，默认间隔为 0。

<div class = "demo-block">
  <w-row :gutter="20">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-row>
</div>

::: demo

```html

<w-row :gutter="20">
  <w-row :span="6"><div class="grid-content bg-purple"></div></w-row>
  <w-row :span="6"><div class="grid-content bg-purple"></div></w-row>
  <w-row :span="6"><div class="grid-content bg-purple"></div></w-row>
  <w-row :span="6"><div class="grid-content bg-purple"></div></w-row>
</w-row>

```

:::

### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="demo-block">
  <w-row :gutter="20">
    <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
</div>

:::demo

```html

<w-row :gutter="20">
  <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### 分栏偏移



