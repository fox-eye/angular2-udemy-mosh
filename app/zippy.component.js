System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isOpened = false;
                }
                ZippyComponent.prototype.toggle = function () {
                    this.isOpened = !this.isOpened;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], ZippyComponent.prototype, "title", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        styles: [" \n    .zippy {\n      width: 80%;\n    }\n    .zippy-header {\n      padding: 5px; \n    }\n\n    .zippy-header:hover{\n     background-color: lightgrey; \n    }\n  "],
                        template: "\n    <div class='zippy'>\n      <div class='zippy-header' (click)=\"toggle()\">\n        {{ title }}\n        <i class=\"glyphicon pull-right\" [ngClass]=\"{\n          'glyphicon-chevron-down': !isOpened,\n          'glyphicon-chevron-up': isOpened\n          }\"></i>\n      </div>\n      <div class='zippy-content' *ngIf=\"isOpened\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map