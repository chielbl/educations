import { Routes } from "@angular/router";
import { EditComponent } from "./pages/edit/edit.component";
import { HomeComponent } from "./pages/home/home.component";
import { CreateComponent } from "./pages/create/create.component";

export const routes: Routes = [
     { path: "", component: HomeComponent },
     { path: "edit", component: EditComponent },
     { path: "create", component: CreateComponent },
];
