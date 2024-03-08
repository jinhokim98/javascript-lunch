import Option, { OptionProps } from '../Option';

export type SelectProps = {
  name: string;
  id: string;
  classname: string;
  required: boolean;
  options: OptionProps[];
};

class Select extends HTMLSelectElement {
  constructor(props: SelectProps) {
    super();
    const { name, id, classname, required, options } = props;

    this.name = name;
    this.id = id;
    this.classList.add(classname);
    this.required = required;
    this.addOptions(options);
  }

  addOptions(options: OptionProps[]) {
    options.forEach((option) => {
      this.appendChild(new Option(option));
    });
  }
}

customElements.define('matzip-select', Select, { extends: 'select' });

export default Select;
