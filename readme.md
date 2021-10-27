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
        tag: 'sf-card',
        title: 'Card',
        description: 'Containers that are used for content in steps.',
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
        code-example: `
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
        tag: 'sf-card-col',
        title: 'Cards Columns',
        description: 'Containers that are used to sub-divide cards.',
        code-example: `
        <sf-card-col slot="col-2">
            <div class="product-price" id="prod-price-001">US$ 118.00</div>
        </sf-card-col>
        `
    },
    {
        tag: 'sf-card-content',
        title: 'Card Content',
        description: 'Containers used for content inside card columns.',
        code-example: `
        <sf-card-content>
            <sf-ratio-group id="shipping-dates-001"></sf-ratio-group>
        </sf-card-content>
        `
    },
    {
        tag: 'sf-card-image',
        title: 'Card Image',
        description: 'Containers to retain images inside card content.',
        options: [
            {
                label: 'image',
                type: 'String',
                description: 'Required. Image name or url to be used.'
            }
        ],
        code-example: `
        const imgName = 'logo.png';
        <sf-card-image image="imgName"></sf-card-image>
        `
    },
    {
        tag: 'sf-card-title',
        title: 'Card Title',
        description: 'Containers for main titles in cards.',
        code-example: `
        <sf-card-title>Shipping Date</sf-card-title>
        `
    },
    {
        tag: 'sf-form',
        title: 'Form',
        description: 'Containers to define forms.',
        code-example: `
        <sf-form>
        ...
        <sf-form>
        `
    },
    {
        tag: 'sf-full-address',
        title: 'Full Addresss',
        description: 'Contains Street (1 and 2), City, State, Zip, Country',
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
        code-example: `
        <sf-full-address show-buttom="true" id-suffix="001" id="ad-02"></sf-full-address>
        `
    },
    {
        tag: 'sf-full-credit-card',
        title: 'Full Credit Card',
        description: 'Contains card number, card date, CVC and card holer.',
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
        code-example: `
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
        tag: 'sf-input',
        title: 'Input',
        description: 'Besides common type (text, password, email) allows zipcode, card CVC, card date and card number.',
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
        code-example: `
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
        tag: 'sf-main-title',
        title: 'Main Title',
        description: 'Wrappers for main titles.',
        code-example: `
        <sf-main-title>Billing Address</sf-main-title>
        `
    },
    {
        tag: 'sf-ratio-group',
        title: 'Ratio Buttons',
        description: 'Creates modern ratio buttons.',
        options: [
            {
                label: 'radioGroupData',
                type: 'Array',
                description: 'Required. Inner Object uses radioLabel, radioName and radioModel.'
            },
        ],
        code-example: `
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
        tag: 'sf-select-menu',
        title: 'Select Menu',
        description: 'Similar to html select menus with options',
        options: [
            {
                label: 'selectMenuData',
                type: 'Array',
                description: 'Required. Inner Object uses optionLabel and optionValue.'
            },
        ],
        code-example: `
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
        tag: 'sf-stepper',
        title: 'Stepper',
        description: 'Powerful wrapper to generate multiple steps easily.',
        options: [
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
        ],
        code-example: `
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
        tag: 'sf-submit-button',
        title: 'Submit Button',
        description: 'Responsive submit button',
        options: [
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
        ],
        code-example: `
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
