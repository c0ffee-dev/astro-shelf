---
title: Markdown スタイルガイド
createdAt: 2024-06-19
thumbnail: 'https://picsum.photos/536/354'
---

ここでは、AstroでMarkdownコンテンツを執筆する際に使用できる、基本的なMarkdown構文のサンプルを紹介します。

## 見出し（Headings）

以下のHTML `<h1>`〜`<h6>` 要素は、6段階のセクション見出しを表します。`<h1>` が最も高いセクションレベルで、`<h6>` が最も低いレベルです。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落（Paragraph）

吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番 lunch 悪（わる）な種族であったそうだ。この書生というものは時々我々を捕えて煮て食うという話である。

しかしその当時は何という考もなかったから別段恐ろしいとも思わなかった。ただ彼の手のひらに載せられてスーと持ち上げられた時、何だかフワフワした感じがあったばかりである。

## 画像（Images）

### 構文（Syntax）

```markdown
![代替テキスト](./画像の/絶対パス/または/相対パス)

```

### 出力（Output）

## 引用（Blockquotes）

引用（blockquote）要素は、別のソースから引用されたコンテンツを表します。オプションで `footer` や `cite` 要素内に引用元を記述したり、注釈や略語などのインラインの変更を加えたりすることができます。

### 引用元なしの引用

#### 構文（Syntax）

```markdown
> ここに引用文が入ります。長文の引用や、
> 重要なテキストを強調したい場合に使用します。
> 引用内でも *Markdown構文* を使用できます。

```

#### 出力（Output）

> ここに引用文が入ります。長文の引用や、
> 重要なテキストを強調したい場合に使用します。
> 引用内でも *Markdown構文* を使用できます。

### 引用元ありの引用

#### 構文（Syntax）

```markdown
> 記憶を共有することで通信するな。通信することで記憶を共有せよ。<br>
> — <cite>Rob Pike[^1]</cite>

```

#### 出力（Output）

> 記憶を共有することで通信するな。通信することで記憶を共有せよ。
>
>
>
>
> — Rob Pike[^1]

[^1]: 上記の引用は、2015年11月18日のGopherfestにおけるRob Pikeの[講演](https://www.youtube.com/watch?v=PAAkCSZUG1c)（英語）からの抜粋です。

## テーブル（Tables）

### 構文（Syntax）

```markdown
| 斜体（Italics） | 太字（Bold） | コード（Code） |
| --------------- | ------------ | -------------- |
| *斜体* | **太字** | `code`         |

```

### 出力（Output）

| 斜体（Italics） | 太字（Bold） | コード（Code） |
| --- | --- | --- |
| *斜体* | **太字** | `code` |

## コードブロック（Code Blocks）

````markdown
```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 サンプルドキュメント</title>
  </head>
  <body>
    <p>テスト</p>
  </body>
</html>
```
````

### 出力（Output）

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 サンプルドキュメント</title>
  </head>
  <body>
    <p>テスト</p>
  </body>
</html>
```

## リストの種類（List Types）

### 連番付きリスト（Ordered List）

#### 構文（Syntax）

```markdown
1. 1番目の項目
2. 2番目の項目
3. 3番目の項目
```

#### 出力（Output）

1. 1番目の項目
2. 2番目の項目
3. 3番目の項目

### 箇条書きリスト（Unordered List）

#### 構文（Syntax）

```markdown
- リストの項目
- 別の項目
- さらに別の項目
```

#### 出力（Output）

- リストの項目
- 別の項目
- さらに別の項目

### ネストされたリスト（Nested list）

#### 構文（Syntax）

```markdown
- フルーツ
  - りんご
  - オレンジ
  - バナナ
- 乳製品
  - 牛乳
  - チーズ
```

#### 出力（Output）

- フルーツ
  - りんご
  - オレンジ
  - バナナ
- 乳製品
  - 牛乳
  - チーズ

## その他の要素 — abbr, sub, sup, kbd, mark

### 構文（Syntax）

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> はビットマップ画像フォーマットの一種です。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

セッションを終了するには <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> を押してください。

ほとんどの <mark>サンショウウオ</mark> は夜行性で、昆虫やミミズなどの小さな生き物を捕食します。
```

### 出力

<abbr title="Graphics Interchange Format">GIF</abbr> はビットマップ画像フォーマットの一種です。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

セッションを終了するには <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> を押してください。

ほとんどの <mark>サンショウウオ</mark> は夜行性で、昆虫やミミズなどの小さな生き物を捕食します。
