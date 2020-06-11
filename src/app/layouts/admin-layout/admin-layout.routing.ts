import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { ProductsComponent } from '../../pages/products/products/products.component';
import { CompanyComponent } from '../../pages/company/company/company.component';
import { AddCompanyComponent } from '../../pages/company/add-company/add-company.component';
import { EditCompanyComponent } from '../../pages/company/edit-company/edit-company.component';

import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    
    { path: 'products',      component: ProductsComponent },
    { path: 'company',      component: CompanyComponent },
    { path: 'company/add',      component: AddCompanyComponent },
    { path: 'company/edit',      component: EditCompanyComponent },

    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
