import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {WebSocketService} from "./websocket.service";
import {StompService} from "./stomp.service";
import {StartPageComponent} from "./start-page.component/start-page.component";
import {FieldComponent} from "./field.component/field.component";
import {MaterialModule} from "@angular/material";
import {CreatureComponent} from "./creatures.component/creature.component";
import {GameService} from "./game.service/game.service";
import {CellComponent} from "./field.component/cell.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: "",
                component: StartPageComponent
            },
            {
                path: "field",
                component: FieldComponent
            },
            {
                path: "creatures",
                component: CreatureComponent
            }
        ]),
        MaterialModule.forRoot()
    ],
    providers: [
        WebSocketService,
        StompService,
        GameService
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        FieldComponent,
        CreatureComponent,
        CellComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
