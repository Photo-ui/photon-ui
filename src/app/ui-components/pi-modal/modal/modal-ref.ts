import {Subject, timer} from "rxjs";
import {OverlayRef} from "@angular/cdk/overlay";
import {Modal} from "./modal";
import {OverlayCloseEvent} from "../../overlay-close-event";


export class ModalRef<R = any, T = any> {
    afterClosed$ = new Subject<OverlayCloseEvent<R | undefined | null>>();

    constructor(
        private overlay: OverlayRef,
        public modal: Modal<T>
    ) {
        overlay.backdropClick().subscribe({
            next: (_) => {
                this._close('backdropClick', null);
            }
        })
    }

    close(data?: R) {
        this._close('close', data);
    }

    private _close(type: 'backdropClick' | 'close', data: R | undefined | null) {
        this.afterClosed$.next({
            type,
            data
        });
        timer(100).subscribe({
            next: (()=> {
                this.overlay.dispose();
                this.afterClosed$.complete();
            })
        })
    }
}
