import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { SidebarModule } from './sidebar/sidebar.module';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { FooterModule } from './shared/footer/footer.module';
// import { NavbarModule} from './shared/navbar/navbar.module';
// import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        // SidebarModule,
        SidebarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
