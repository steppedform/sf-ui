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

```bash
{
        index: 'sf-card',
        description: 'Containers that are used for content in steps.',
        title: 'Card',
        url: '#docs/v1/sf-card',
        options: [
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
        ],
        code: `
<sf-card dist="2">
    <sf-card-col slot="col-1">
    <sf-card-image></sf-card-image>
    </sf-card-col>
    <sf-card-col slot="col-2">
    <div class="product-price" id="prod-price-001">US$ 118.00</div>
    </sf-card-col>
</sf-card>
        `
    },
    {
        index: 'sf-card-col',
        description: 'Containers that are used to sub-divide cards.',
        title: 'Cards Columns',
        url: '#docs/v1/sf-card-col',
        code: `
<sf-card-col slot="col-2">
    <div class="product-price" id="prod-price-001">US$ 118.00</div>
</sf-card-col>
        `
    },
    {
        index: 'sf-card-content',
        description: 'Containers used for content inside card columns.',
        title: 'Card Content',
        url: '#docs/v1/sf-card-content',
        code: `
<sf-card-content>
    <sf-ratio-group id="shipping-dates-001"></sf-ratio-group>
</sf-card-content>
        `
    },
    {
        index: 'sf-card-image',
        description: 'Containers to retain images inside card content.',
        title: 'Card Image',
        url: '#docs/v1/sf-card-image',
        options: [
            {
                label: 'image',
                type: 'String',
                description: 'Required. Image name or url to be used.'
            }
        ],
        code: `
const imgName = 'logo.png';
<sf-card-image image="imgName"></sf-card-image>
        `
    },
    {
        index: 'sf-card-title',
        description: 'Containers for main titles in cards.',
        title: 'Card Title',
        url: '#docs/v1/sf-card-title',
        code: `
<sf-card-title>Shipping Date</sf-card-title>
        `
    },
    {
        index: 'sf-form',
        description: 'Containers to define forms.',
        title: 'Form',
        url: '#docs/v1/sf-form',
        code: `
<sf-form>
...
<sf-form>
        `
    },
    {
        index: 'sf-full-address',
        description: 'Contains Street (1 and 2), City, State, Zip, Country',
        title: 'Full Addresss',
        url: '#docs/v1/sf-full-address',
        options: [
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
        ],
        code: `
<sf-full-address show-buttom="true" id-suffix="001" id="ad-02"></sf-full-address>
        `
    },
    {
        index: 'sf-full-credit-card',
        description: 'Contains card number, card date, CVC and card holer.',
        title: 'Full Credit Card',
        url: '#docs/v1/sf-full-credit-card',
        options: [
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
        ],
        code: `
const paymentOptions = [
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

<sf-full-credit-card show-buttom="true" id-suffix="001" id="cc-01"></sf-full-credit-card>

const paymentConfig = document.getElementById('cc-01');
paymentConfig.paymentAddressConfig = paymentOptions;
        `
    },
    {
        index: 'sf-input',
        description: 'Besides common type (text, password, email) allows zipcode, card CVC, card date and card number.',
        title: 'Input',
        url: '#docs/v1/sf-input',
        options: [
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
        ],
        code: `
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
        `
    },
    {
        index: 'sf-main-title',
        description: 'Wrappers for main titles.',
        title: 'Main Title',
        url: '#docs/v1/sf-main-title',
        code: `
<sf-main-title>Billing Address</sf-main-title>
        `
    },
    {
        index: 'sf-ratio-group',
        description: 'Creates modern ratio buttons.',
        title: 'Ratio Buttons',
        url: '#docs/v1/sf-ratio-group',
        options: [
            {
                label: 'radioGroupData',
                type: 'Array',
                description: 'Required. Inner Object uses radioLabel, radioName and radioModel.'
            },
        ],
        code: `
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
        `
    },
    {
        index: 'sf-select-menu',
        description: 'Similar to html select menus with options',
        title: 'Select Menu',
        url: '#docs/v1/sf-select-menu',
        options: [
            {
                label: 'selectMenuData',
                type: 'Array',
                description: 'Required. Inner Object uses optionLabel and optionValue.'
            },
        ],
        code: `
const productPriceOptions = [
{
    "optionLabel": "1",
    "optionValue": "1",
}
];

<sf-select-menu id="prod-quan-001"></sf-select-menu>

const productMenu = document.getElementById('prod-quan-001');
productMenu.selectMenuData = productPriceOptions;            
        `
    },
    {
        index: 'sf-stepper',
        description: 'Powerful wrapper to generate multiple steps easily.',
        title: 'Stepper',
        url: '#docs/v1/sf-stepper',
        options: [
            {
                label: 'stepsData',
                type: 'Array',
                description: 'Required. Object includes stepNumber, stepLabel, activeStep and stepHidden'
            },
            {
                label: 'stepperAlign',
                type: 'String',
                description: 'Optional. Modify stepper alignment. Ex: \'vertical\' , \'horizontal\'.'
            }
        ],
        code: `
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
]

<sf-stepper id="h-stepper-001" stepper-align="horizontal">
    <sf-step>...</sf-step>
    <sf-step>...</sf-step>
</sf-stepper>      

const verticalStepper = document.getElementById('v-stepper-001');
verticalStepper.stepsData = steps;
        `
    },
    {
        index: 'sf-submit-button',
        description: 'Responsive submit button',
        title: 'Submit Button',
        url: '#docs/v1/sf-submit-button',
        options: [
            {
                label: 'btnStyle',
                type: 'String',
                description: 'Optional. Can be \'primary\' , otherwise \'secondary\'.'
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
        ],
        code: `
<sf-submit-button id-suffix="003" btn-style="primary">Continue</sf-submit-button>
        `
}
```

## License

### Commercial license
If you want to use steppedForm to develop non open sourced sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Which means, you won't have to change your whole application source code to an open source license. [[Purchase a steppedForm Commercial License]](https://steppedform.com/pricing/)

### Open source license
If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use steppedForm under the terms of the GPLv3.

**The credit comments in all the files should be kept intact** (even after combination or minification)
