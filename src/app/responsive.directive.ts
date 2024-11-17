import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Directive, ElementRef, effect } from "@angular/core";


@Directive({
    selector: '[responsive]',
    standalone: true,
    exportAs: 'responsive'
})
export class ResponsiveDirective {

    constructor(private elRef: ElementRef, private breakPointObserver: BreakpointObserver) {
        effect(() => {
            this.breakPointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.WebLandscape])
                .subscribe({
                    next: (result) => {
                        console.log(result.breakpoints)
                        for (let breakpoint of Object.keys(result.breakpoints)) {
                            if (result.breakpoints[breakpoint]) {
                                if (breakpoint === Breakpoints.WebLandscape || breakpoint !== Breakpoints.HandsetLandscape) {
                                    this.elRef.nativeElement.classList.add('pc')
                                }
                                if (breakpoint === Breakpoints.HandsetLandscape) {
                                    this.elRef.nativeElement.classList.remove('pc')
                                }
                            }
                        }
                    }
                })

        })


    }

}