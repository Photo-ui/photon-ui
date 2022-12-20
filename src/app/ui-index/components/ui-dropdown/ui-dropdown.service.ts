import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiDropdownService {

  constructor() { }

  text = `
    <pi-drop-list [dropListTemplate]="dropList" label="Select item from List">
        <ng-template #dropList>
            <div class="z-10 w-full bg-white rounded divide-y divide-gray-100 shadow">
                <ul class="py-1 text-sm text-gray-700">
                    <li>
                        <a class="block py-2 px-4 hover:bg-gray-100">Dashboard</a>
                    </li>
                    <li>
                        <a class="block py-2 px-4 hover:bg-gray-100">Settings</a>
                    </li>
                    <li>
                        <a class="block py-2 px-4 hover:bg-gray-100">Earnings</a>
                    </li>
                    <li>
                        <a class="block py-2 px-4 hover:bg-gray-100">Sign out</a>
                   </li>
                </ul>
             </div>
        </ng-template>
    </pi-drop-list>`;
}
