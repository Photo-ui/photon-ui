import { Component, OnInit } from '@angular/core';
import {UiDrawerService} from "./ui-drawer.service";
import {CompDrawerComponent} from "./comp-drawer/comp-drawer.component";
import {NotificationService} from "../../../ui-components/pi-notification/notification.service";
import {DrawerService} from "../../../ui-components/pi-drawer/drawer.service";

@Component({
  selector: 'app-ui-drawer',
  templateUrl: './ui-drawer.component.html',
  styleUrls: ['./ui-drawer.component.scss']
})
export class UiDrawerComponent implements OnInit {
  constructor(private drawerService: DrawerService, public service: UiDrawerService, private notification: NotificationService) {
  }

  ngOnInit(): void {
  }

  open() {
    const ref = this.drawerService.open({
      content: CompDrawerComponent,
      data: null,
      position: "left",
      title: 'Panel Drawer'
    });

    ref.afterClosed$.subscribe((value: any) => {
      // alert(JSON.stringify(value));
    });
  }

  openNeutralNotification() {
    this.notification.notify({
      message: 'I am a message, a very long message'
    })
  }

  openWarningNotification() {
    this.notification.notify({
      message: 'I am a message, a very long message',
      position: 'top-left',
      type: 'warning'
    })
  }
}
