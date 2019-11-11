import { CommonModule }    from '@angular/common';
import { FormsModule }     from '@angular/forms';
import { LeafletModule }   from '@asymmetrik/ngx-leaflet';
import { ModalModule }     from 'ngx-bootstrap/modal';
import { NgModule }        from '@angular/core';
import { NgSelectModule }  from '@ng-select/ng-select';
import { TooltipModule }   from 'ngx-bootstrap/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule }           from '../core/components/components.module';
import { DirectivesModule }           from '../core/directives/directives.module';
import { MapContextMenuComponent }    from './map-leaflet/components/map-context-menu/map-context-menu.component';
import { MapGeolocationComponent }    from './map-leaflet/components/map-geolocation/map-geolocation.component';
import { MapLeafletComponent }        from './map-leaflet/map-leaflet.component';
import { MapLeafletMarkersComponent } from './map-leaflet/components/map-leaflet-markers/map-leaflet-markers.component';
import { MapMainAreaComponent }       from './map-leaflet/components/map-main-area/map-main-area.component';
import { MapRoutingModule }           from './map-routing.module';
import { MapSearchPlaceComponent }    from './map-leaflet/components/map-search-place/map-search-place.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    LeafletModule,
    ModalModule,
    ComponentsModule,
    DirectivesModule,
    MapRoutingModule,
    TranslateModule,
    NgSelectModule,
    TooltipModule.forRoot(),
  ],
  declarations: [
    MapContextMenuComponent,
    MapGeolocationComponent,
    MapLeafletComponent,
    MapLeafletMarkersComponent,
    MapSearchPlaceComponent,
    MapMainAreaComponent
  ],
})
export class MapModule {
}
