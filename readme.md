# SteppedForm

Official repository of `@steppedform/sf-ui`, the fastest way to build steppers and multi steps forms.

## Getting Started

To start using a new component using SteppedForm, run npm install in your JS project:

```bash
npm i @steppedform/sf-ui
```

To switch theme define `data-theme` in `body` (current options are `dark` and `light`):

```bash
<body data-theme="light"> 
```

## Reference 1.X

Tag: `sf-card`

Title: `Card`

Description: `Containers that are used for content in steps.`

Options:

```bash
[
    {
        label: 'dist',
        type: 'String',
        description: 'Required. Creates cols combinations (up to 4), Ex:  1,2,3,4,2-3,2-4,3-4'
    },
    {
        label: 'center',
        type: 'Boolean',
        description: 'Optional. Centers the element in the card.'
    }
];
```
Code example:

```bash
<sf-card dist="2">
    <sf-card-col slot="col-1">
    <sf-card-image></sf-card-image>
    </sf-card-col>
    <sf-card-col slot="col-2">
    <div class="product-price" id="prod-price-001">US$ 118.00</div>
    </sf-card-col>
</sf-card>
```

Tag: `sf-card-col`

Title: `Cards Columns`

Description: `Containers that are used to sub-divide cards.`

Code-example: 
```bash
<sf-card-col slot="col-2">
    <div class="product-price" id="prod-price-001">US$ 118.00</div>
</sf-card-col>
```

Tag: `sf-card-content`

Title: `Card Content`

Description: `Containers used for content inside card columns.`

Code-example:

```bash
<sf-card-content>
    <sf-ratio-group id="shipping-dates-001"></sf-ratio-group>
</sf-card-content>
```

Tag: `sf-card-image`

Title: `Card Image`

Description: `Containers to retain images inside card content.`

Options: 

```bash
[
        {
            label: 'image',
            type: 'String',
            description: 'Required. Image name or url to be used.'
        }
];
```
Code-example:

```bash
const imgName = 'logo.png';
<sf-card-image image="imgName"></sf-card-image>
```
Tag: `sf-card-title`

Title: `Card Title`
        
Description: `Containers for main titles in cards.`
        
Code-example:

```bash
<sf-card-title>Shipping Date</sf-card-title>
```

Tag: `sf-form`

Title: `Form`

Description: `Containers to define forms.`
        
Code-example:

```bash
<sf-form>
...
<sf-form>
```

Tag: `sf-full-address`

Title: `Full Addresss`

Description: `Contains Street (1 and 2), City, State, Zip, Country`

Options:

```bash
[
    {
        label: 'showButton',
        type: 'Boolean',
        description: 'Optional. Allows having or not continue button.'
    },
    {
        label: 'idSuffix',
        type: 'String',
        description: 'Optional. Allows adding a suffix to elements id.'
    }
];
```
Code-example:

```bash
<sf-full-address show-buttom="true" id-suffix="001" id="ad-02"></sf-full-address>
```

Tag: `sf-full-credit-card`

Title: `Full Credit Card`

Description: `Contains card number, card date, CVC and card holer.`

Options:

```bash
[
    {
        label: 'paymentAddressConfig',
        type: 'String',
        description: 'Required. Object for address(es) ratio button.'
    },
    {
        label: 'showButton',
        type: 'Boolean',
        description: 'Optional. Allows having or not continue button.'
    },
    {
        label: 'idSuffix',
        type: 'String',
        description: 'Optional. Allows adding a suffix to elements id.'
    }
];
```
PaymentOptions:

```bash
[
{
    "radioLabel": "Same as shipping",
    "radioName": "sameAddress",
    "radioModel": "paymentAddress"
},
{
    "radioLabel": "Different Address",
    "radioName": "differentAddress",
    "radioModel": "paymentAddress"
},
];
```

Code-example:

```bash
<sf-full-credit-card show-buttom="true" id-suffix="001" id="cc-01"></sf-full-credit-card>

const paymentConfig = document.getElementById('cc-01');
paymentConfig.paymentAddressConfig = paymentOptions;
```

Tag: `sf-input`

Title: `Input`
        
Description: `Besides common type (text, password, email) allows zipcode, card CVC, card date and card number.`

Options: 

```bash
[
    {
        label: 'sfLabel',
        type: 'String',
        description: 'Required. Wrapper for input label.'
    },
    {
        label: 'sfId',
        type: 'String',
        description: 'Optional. Element id for sf-input.'
    },
    {
        label: 'sfData',
        type: 'String',
        description: 'Optional. Allows zipcode, card CVC, card date and card number.'
    },
    {
        label: 'sfRequired',
        type: 'Boolean',
        description: 'Optional. Marks as required sf-input.'
    },
    {
        label: 'sfDisabled',
        type: 'Boolean',
        description: 'Optional. Disable input if necessary.'
    },
    {
        label: 'sfType',
        type: 'String',
        description: 'Required. Currently allows text, password and email.'
    },
    {
        label: 'sfError',
        type: 'String',
        description: 'Optional. Error message for required sf-inputs.'
    }
];
```

Code-example:

```bash
const state = [
    {
        "id": 3901,
        "name": "Badakhshan",
        "country_id": 1,
        "country_code": "AF",
        "state_code": "BDS",
        "latitude": "36.73477250",
        "longitude": "70.81199530"
    },
];

<sf-input sf-label="State/Province" sf-data="{this.state}" sfId="A01" sf-required="true"></sf-input>
```
Tag: `sf-main-title`

Title: `Main Title`
        
Description: `Wrappers for main titles.`
        
Code-example: 

```bash
<sf-main-title>Billing Address</sf-main-title>
```

Tag: `sf-ratio-group`

Title: `Ratio Buttons`

Description: `Creates modern ratio buttons.`

Options:

```bash
[
    {
        label: 'radioGroupData',
        type: 'Array',
        description: 'Required. Inner Object uses radioLabel, radioName and radioModel.'
    },
],
```
Code-example:

```bash
const objectData = [
    {
        "radioLabel": "Same as shipping",
        "radioName": "sameAddress",
        "radioModel": "paymentAddress"
    },
    {
        "radioLabel": "Different Address",
        "radioName": "differentAddress",
        "radioModel": "paymentAddress"
    },
];

<sf-ratio-group radioGroupData={this.objectData}></sf-ratio-group>
```

Tag: `sf-select-menu`

Title: `Select Menu`

Description: `Similar to html select menus with options`

Options:

```bash
[
    {
        label: 'selectMenuData',
        type: 'Array',
        description: 'Required. Inner Object uses optionLabel and optionValue.'
    },
];
```
Code-example:

```bash
const productPriceOptions = [
{
    "optionLabel": "1",
    "optionValue": "1",
}
];

<sf-select-menu id="prod-quan-001"></sf-select-menu>

const productMenu = document.getElementById('prod-quan-001');
productMenu.selectMenuData = productPriceOptions;            
```

Tag: `sf-stepper`

Title: `Stepper`

Description: `Powerful wrapper to generate multiple steps easily.`

Options: 

```bash
[
    {
        label: 'stepsData',
        type: 'Array',
        description: 'Required. Object includes stepNumber, stepLabel, activeStep and stepHidden'
    },
    {
        label: 'stepperAlign',
        type: 'String',
        description: 'Optional. Modify stepper alignment. Ex: `vertical` , `horizontal`.'
    }
];
```

Code-example:

```bash
const steps =[
    {
        "stepNumber": "1",
        "stepLabel": "Place Order",
        "activeStep": true,
        "stepHidden": false
    },
    {
        "stepNumber": "2",
        "stepLabel": "Address",
        "activeStep": false,
        "stepHidden": false
    },
];

<sf-stepper id="h-stepper-001" stepper-align="horizontal">
    <sf-step>...</sf-step>
    <sf-step>...</sf-step>
</sf-stepper>      

const verticalStepper = document.getElementById('v-stepper-001');
verticalStepper.stepsData = steps;
```

Tag: `sf-submit-button`

Title: `Submit Button`

Description: `Responsive submit button`

Options:

```bash
[
    {
        label: 'btnStyle',
        type: 'String',
        description: 'Optional. Can be `primary` , otherwise `secondary`.'
    },
    {
        label: 'idSuffix',
        type: 'String',
        description: 'Optional. Allows adding a suffix to elements id.'
    },
    {
        label: 'sfDisabled',
        type: 'boolean',
        description: 'Optional. Disable button if necessary.'
    }
];
```
    
Code-example:

```bash
<sf-submit-button id-suffix="003" btn-style="primary">Continue</sf-submit-button>
```

## License

### Commercial license
If you want to use steppedForm to develop non open sourced sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Which means, you won't have to change your whole application source code to an open source license. [[Purchase a steppedForm Commercial License]](https://steppedform.com/pricing/)

### Open source license
If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use steppedForm under the terms of the GPLv3.

**The credit comments in all the files should be kept intact** (even after combination or minification)
