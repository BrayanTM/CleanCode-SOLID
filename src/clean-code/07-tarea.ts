(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface Html{
        id: string;
        type: HtmlType;
    }

    class HtmlElement {

        public id: string;
        public type: HtmlType;

        constructor({ id, type}: Html) {
            this.id = id;
            this.type = type;
        }
    }

    interface Attributes{
        placeholder: string;
        value: string;
    }

    class InputAttributes{

        public placeholder: string;
        public value: string;

        constructor({value,placeholder}: Attributes) {
            this.placeholder = placeholder;
            this.value = value;
        }
    }

    class InputEvents {

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    interface Element {
        id: string;
        type: HtmlType;
        placeholder: string;
        value: string;
    }

    class InputElement {

        public htmlElement: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor({id, type, placeholder, value}: Element) {

            this.htmlElement = new HtmlElement({id, type});
            this.attributes = new InputAttributes({placeholder, value});
            this.events = new InputEvents();

        }

    }

    const nameField = new InputElement({
        type: 'input',
        value: 'Fernando', 
        placeholder: 'Enter first name', 
        id: 'txtName'
    });

    console.log({ nameField });

})()