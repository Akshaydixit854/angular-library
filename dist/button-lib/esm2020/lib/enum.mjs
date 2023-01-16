export var Enum;
(function (Enum) {
    let ButtonIcon;
    (function (ButtonIcon) {
        ButtonIcon["STAR"] = "button-star-icon";
    })(ButtonIcon = Enum.ButtonIcon || (Enum.ButtonIcon = {}));
    let ButtonColor;
    (function (ButtonColor) {
        ButtonColor["DEFAULT"] = "button-color-default";
        ButtonColor["PRIMARY"] = "button-color-primary";
        ButtonColor["SECONDARY"] = "button-color-secondary";
    })(ButtonColor = Enum.ButtonColor || (Enum.ButtonColor = {}));
    let ButtonShape;
    (function (ButtonShape) {
        ButtonShape["SQUARED"] = "button-shape-squared";
        ButtonShape["ROUNDED"] = "button-shape-rounded";
        ButtonShape["PILLED"] = "button-shape-pilled";
    })(ButtonShape = Enum.ButtonShape || (Enum.ButtonShape = {}));
    let ButtonSize;
    (function (ButtonSize) {
        ButtonSize["SMALL"] = "button-size-small";
        ButtonSize["MEDIUM"] = "button-size-medium";
        ButtonSize["LARGE"] = "button-size-large";
    })(ButtonSize = Enum.ButtonSize || (Enum.ButtonSize = {}));
    let ButtonStyle;
    (function (ButtonStyle) {
        ButtonStyle["SOLID"] = "button-style-solid";
        ButtonStyle["DOTTED"] = "button-style-dotted";
    })(ButtonStyle = Enum.ButtonStyle || (Enum.ButtonStyle = {}));
    let ButtonEffect;
    (function (ButtonEffect) {
        ButtonEffect["HOVER"] = "hover-effect";
        ButtonEffect["PRESSED"] = "pressed-effect";
        ButtonEffect["DISABLED"] = "disabled-effect";
        ButtonEffect["REST"] = "rest-effect";
    })(ButtonEffect = Enum.ButtonEffect || (Enum.ButtonEffect = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2J1dHRvbi1saWIvc3JjL2xpYi9lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sS0FBVyxJQUFJLENBa0NwQjtBQWxDRCxXQUFpQixJQUFJO0lBQ25CLElBQVksVUFFWDtJQUZELFdBQVksVUFBVTtRQUNwQix1Q0FBeUIsQ0FBQTtJQUMzQixDQUFDLEVBRlcsVUFBVSxHQUFWLGVBQVUsS0FBVixlQUFVLFFBRXJCO0lBRUQsSUFBWSxXQUlYO0lBSkQsV0FBWSxXQUFXO1FBQ3JCLCtDQUFnQyxDQUFBO1FBQ2hDLCtDQUFnQyxDQUFBO1FBQ2hDLG1EQUFvQyxDQUFBO0lBQ3RDLENBQUMsRUFKVyxXQUFXLEdBQVgsZ0JBQVcsS0FBWCxnQkFBVyxRQUl0QjtJQUVELElBQVksV0FJWDtJQUpELFdBQVksV0FBVztRQUNyQiwrQ0FBZ0MsQ0FBQTtRQUNoQywrQ0FBZ0MsQ0FBQTtRQUNoQyw2Q0FBOEIsQ0FBQTtJQUNoQyxDQUFDLEVBSlcsV0FBVyxHQUFYLGdCQUFXLEtBQVgsZ0JBQVcsUUFJdEI7SUFFRCxJQUFZLFVBSVg7SUFKRCxXQUFZLFVBQVU7UUFDcEIseUNBQTJCLENBQUE7UUFDM0IsMkNBQTZCLENBQUE7UUFDN0IseUNBQTJCLENBQUE7SUFDN0IsQ0FBQyxFQUpXLFVBQVUsR0FBVixlQUFVLEtBQVYsZUFBVSxRQUlyQjtJQUVELElBQVksV0FHWDtJQUhELFdBQVksV0FBVztRQUNyQiwyQ0FBNEIsQ0FBQTtRQUM1Qiw2Q0FBOEIsQ0FBQTtJQUNoQyxDQUFDLEVBSFcsV0FBVyxHQUFYLGdCQUFXLEtBQVgsZ0JBQVcsUUFHdEI7SUFFRCxJQUFZLFlBS1g7SUFMRCxXQUFZLFlBQVk7UUFDdEIsc0NBQXNCLENBQUE7UUFDdEIsMENBQTBCLENBQUE7UUFDMUIsNENBQTRCLENBQUE7UUFDNUIsb0NBQW9CLENBQUE7SUFDdEIsQ0FBQyxFQUxXLFlBQVksR0FBWixpQkFBWSxLQUFaLGlCQUFZLFFBS3ZCO0FBQ0gsQ0FBQyxFQWxDZ0IsSUFBSSxLQUFKLElBQUksUUFrQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBFbnVtIHtcclxuICBleHBvcnQgZW51bSBCdXR0b25JY29uIHtcclxuICAgIFNUQVIgPSAnYnV0dG9uLXN0YXItaWNvbicsXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBCdXR0b25Db2xvciB7XHJcbiAgICBERUZBVUxUID0gJ2J1dHRvbi1jb2xvci1kZWZhdWx0JyxcclxuICAgIFBSSU1BUlkgPSAnYnV0dG9uLWNvbG9yLXByaW1hcnknLFxyXG4gICAgU0VDT05EQVJZID0gJ2J1dHRvbi1jb2xvci1zZWNvbmRhcnknLFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGVudW0gQnV0dG9uU2hhcGUge1xyXG4gICAgU1FVQVJFRCA9ICdidXR0b24tc2hhcGUtc3F1YXJlZCcsXHJcbiAgICBST1VOREVEID0gJ2J1dHRvbi1zaGFwZS1yb3VuZGVkJyxcclxuICAgIFBJTExFRCA9ICdidXR0b24tc2hhcGUtcGlsbGVkJyxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBlbnVtIEJ1dHRvblNpemUge1xyXG4gICAgU01BTEwgPSAnYnV0dG9uLXNpemUtc21hbGwnLFxyXG4gICAgTUVESVVNID0gJ2J1dHRvbi1zaXplLW1lZGl1bScsXHJcbiAgICBMQVJHRSA9ICdidXR0b24tc2l6ZS1sYXJnZScsXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBCdXR0b25TdHlsZSB7XHJcbiAgICBTT0xJRCA9ICdidXR0b24tc3R5bGUtc29saWQnLFxyXG4gICAgRE9UVEVEID0gJ2J1dHRvbi1zdHlsZS1kb3R0ZWQnLFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGVudW0gQnV0dG9uRWZmZWN0IHtcclxuICAgIEhPVkVSID0gJ2hvdmVyLWVmZmVjdCcsXHJcbiAgICBQUkVTU0VEID0gJ3ByZXNzZWQtZWZmZWN0JyxcclxuICAgIERJU0FCTEVEID0gJ2Rpc2FibGVkLWVmZmVjdCcsXHJcbiAgICBSRVNUID0gJ3Jlc3QtZWZmZWN0JyxcclxuICB9XHJcbn1cclxuIl19