function Formulator(settings) {
    this.fields = [];
    this.inputs = [];
    this.location = "";

    this.values = {};

    this.init = () => {
        console.log("INIT");

        this.fields = settings.fields;
        this.location = settings.location;

        this.fields.forEach((field) => {
            console.log("aaaaaaaaaaa", field);
            this.values[field.key] = field.value;
        });

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => this.renderForm());
        } else {
            this.renderForm();
        }
    };

    this.renderForm = () => {
        console.log("settings", settings);

        this.form = document.createElement("div");

        this.fields.forEach((field) => {
            console.log("field", field);

            let inputGroup = document.createElement("div");

            let label = document.createElement("div");
            label.innerText = field.label;
            label.style.cssText = `
                color: blue;

                ${field.styleLabel}
            `;

            inputGroup.append(label);

            let input = document.createElement(field.type);
            input.style.cssText = `
                background: blue;

                ${field.styleInput}
            `;
            input.value = field.value;

            this.inputs.push(input);

            inputGroup.append(input);

            this.form.append(inputGroup);
        });

        const targetElement = document.querySelector(this.location);

        if (!targetElement) {
            console.error(`Target element not found for selector: ${this.location}`);
            return;
        }

        targetElement.append(this.form);
    };

    this.getValues = () => {
        console.log(this.values);
        return this.values;
    };
}
