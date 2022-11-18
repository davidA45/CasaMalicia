import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FormExtensionsModule } from '../form-extensions/form-extensions.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    CatalogComponent,
    CatalogProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, CatalogRoutingModule,FormExtensionsModule,FormsModule,],
  exports: [CatalogComponent],
})
export class CatalogModule {}
