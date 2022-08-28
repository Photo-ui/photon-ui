import {LightBoxData} from "./light-box-data";

export class FormDefinitions {
    key: any;
    type!: 'string' | 'int' | 'bool' | 'enum' | 'lightbox' | 'multiline';
    value: any;
    required?: boolean;
    label!: string;
    placeholder?: string;
    order!: number;
    enumValues?: any[];
    lightBoxData?: LightBoxData[];
}
