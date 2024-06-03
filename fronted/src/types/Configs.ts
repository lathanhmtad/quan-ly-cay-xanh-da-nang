import { EntityPropertySchema } from '../types/EntityProperty';

export abstract class Configs {
    static managerPath: string;
    static resourceUrl: string;
    static resourceKey: string;
    static createTitle: string;
    static updateTitle: string;
    static manageTitle: string;
    protected static _rawProperties: EntityPropertySchema;
    static properties: EntityPropertySchema;
    static initialCreateUpdateFormValues: object;
    static createUpdateFormSchema: object;
}
