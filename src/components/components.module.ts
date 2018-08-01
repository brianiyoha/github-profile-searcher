import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import {IonicModule} from 'ionic-angular';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
	declarations: [SearchResultComponent,
    RepositoriesComponent

	],
	imports: [IonicModule],
	exports: [
		SearchResultComponent,
	RepositoriesComponent
]
})
export class ComponentsModule {}
