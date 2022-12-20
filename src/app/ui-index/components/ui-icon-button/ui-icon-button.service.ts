import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiIconButtonService {

  textBasic = `
  <pi-icon-button size="small" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button size="large" icon="pi pi-arrow-right"></pi-icon-button>
  `

  textRounded = `
  <pi-icon-button rounded="full" size="small" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button rounded="full" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button rounded="full" size="large" icon="pi pi-arrow-right"></pi-icon-button>
  `

  textTypes = `
  <pi-icon-button icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button type="danger" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button type="warning" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button type="success" icon="pi pi-arrow-right"></pi-icon-button>
  `

  textOutline = `
  <pi-icon-button outline icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button outline type="danger" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button outline type="warning" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button outline type="success" icon="pi pi-arrow-right"></pi-icon-button>
  `

  textDisableTypes = `
  <pi-icon-button disabled icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button disabled type="danger" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button disabled type="warning" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button disabled type="success" icon="pi pi-arrow-right"></pi-icon-button>
  `

  textDisableOutline = `
  <pi-icon-button disabled outline icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button disabled outline type="danger" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button disabled outline type="warning" icon="pi pi-arrow-right"></pi-icon-button>
  <pi-icon-button disabled outline type="success" icon="pi pi-arrow-right"></pi-icon-button>
  `
  constructor() { }
}
