# Lighter Components

![components](https://user-images.githubusercontent.com/47366440/218290321-730727b7-904e-4fa5-9884-d480172b0eb4.gif)

## Getting starter
### Install
```
npm i lighter-components
```

## Components

### TextFiled
Customized input

#### Importation

```
import LightTextfield from 'lighter-components/material/LightTextfield'

```

#### Attributes

##### variant
Defines which textfield style

![Variant textfield](https://user-images.githubusercontent.com/47366440/218289818-b53506fe-6a03-4b7a-9d0a-e656cc81773d.png)

> Variant types

```
<LightTextfield label="Email" variant='outline' /> 
<LightTextfield label="Email" variant='default' />
```

##### color
Sets the color of the element

![colorgif](https://user-images.githubusercontent.com/47366440/218290193-3ab830b0-71df-4205-9ec3-62adc8841421.gif)

> Color types
```
<LightTextfield label="Email" color='lightblue' />
<LightTextfield label="Email" color='lightgreen' />
<LightTextfield label="Email" color='lightpurple' />
<LightTextfield label="Email" color='lightyellow' />
<LightTextfield label="Email" color='lightred' />
<LightTextfield label="Email" color='dark' />
```

##### type
Sets the type of the element (Password or Text)

> Types types
```
<LightTextfield label="Email" type='password' />
<LightTextfield label="Email" type='text' />
```

##### label
Defines the name that will appear as a placeholder

> Label example

```
<LightTextfield label="Email" />
```

### Button

![buttons](https://user-images.githubusercontent.com/47366440/218290512-a38b5ef5-5551-48ae-8fc6-d8b46e46f158.gif)

#### Importation

```
import LightButton from 'lighter-components/material/LightButton'
```

#### Attributes

##### color
Sets the color of the element

> Color types
```
<LightButton label="Send" color='lightblue' />
<LightButton label="Send" color='lightgreen' />
<LightButton label="Send" color='lightpurple' />
<LightButton label="Send" color='lightyellow' />
<LightButton label="Send" color='lightred' />
<LightButton label="Send" color='dark' />
```

##### label
Defines the name that will appear as a button

> Label example

```
<LightButton label="Send" />
```

### Modal

![Captura de tela de 2023-02-15 11-05-20](https://user-images.githubusercontent.com/47366440/219050526-d338cd7b-5158-4b39-a0c7-094e4e335c92.png)

#### Importation
```
import LightModal from 'lighter-components/material/LightModal'
```

#### Attributes

##### open
Defines whether the modal is open or not

> Open example
```
<LightModal open={*boolean variable*} />
```

##### onClose
Defines a handler to close the modal

> Open example
```
<LightModal open={*boolean variable*} onClose={*handler*} />
```

## Conclusion
This library is still in early versions, new components will arrive later.

Contact -> wesleyalencar@espacocariri.com

