import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas.component';
import { FormsModule } from '@angular/forms';
import { FormExtensionsModule } from '../form-extensions/form-extensions.module';
import { ReservasRoutingModule } from './reservas-routing.module';
import { ContactModule } from '../contact/contact.module';
import { CatalogModule } from '../catalog/catalog.module';




@NgModule({
  declarations: 
  [
    ReservasComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReservasRoutingModule,
    ContactModule,
    CatalogModule,
   
  ],
  providers: [],
  bootstrap: [ReservasComponent],

})
export class ReservasModule {}
