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

### classnames(styles: ?CSSModules, classMaps: {[string]: condition | boolean}, extraClassName?: string)

- styles: CSSModules, optional

This is an object of CSS Modules

- classMap: {[string]: condition | boolean}, required

- extraClassName: string, optional
