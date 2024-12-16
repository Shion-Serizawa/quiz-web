import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { FinishComponent } from "./finish/finish.component";
import { WaitingComponent } from "./waiting/waiting.component";

export const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "finish",
    component: FinishComponent,
  },
  {
    path: "waiting",
    component: WaitingComponent,
  },
];
