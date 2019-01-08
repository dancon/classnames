# classnames

A simple JavaScript utility for conditionally joining classNames together for CSS Modules.

## Usage

### Step 1: install the package

```bash
  npm i @pandolajs/classnames
```

### Step 2: import

```js
  import classnames from '@pandolajs/classnames'
  import styles from 'path/to/style/file'

  const jsx = (<div className={styles, { foo: true, bar: condition }} />)
```

## API

### classnames(cssModules: ?CSSModules, props: ?{[string]: condition | boolean}, ...extra?: any[])

- cssModules: CSSModules, optional

This is an object of CSS Modules

- props: {[string]: condition | boolean}, required

- extra: string, optional
