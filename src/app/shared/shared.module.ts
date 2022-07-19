import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UIModule} from './ui/ui.module';
import {DebounceClickDirective} from './directive/debounce-click.directive';
import {GetLabelByIdInArrayPipe} from './pipe/get-label-by-id-in-array.pipe';

@NgModule({
    declarations: [DebounceClickDirective, GetLabelByIdInArrayPipe],
    imports: [
        CommonModule,
        UIModule
    ],
    exports: [DebounceClickDirective, GetLabelByIdInArrayPipe]
})
export class SharedModule {
}
