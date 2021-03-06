/**
 * Can validate a single form element using the given validator functions.
 */
class ElementValidator {
    constructor(private validatorFns: ValidatorFn[]) {}

    public validate(element: HTMLElement): string[] {
        var value = Util.getSingleProperty(ReadFormValues.getValueFrom(element));
        var errors = [];
        for (var i=0; i<this.validatorFns.length; i++) {
            var r = this.validatorFns[i](value);
            if (r) errors.push(r);
        }

        return errors;
    }
}
