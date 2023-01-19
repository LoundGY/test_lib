import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigResponse } from '../../../dynamic-simplifier-services/src';
import { ConfigService } from '../../../dynamic-simplifier-services/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public readonly title = 'library-test-app';

  public libValue: string = '';

  public sub$: Observable<ConfigResponse>;

  constructor( private readonly configService: ConfigService ){}

  ngOnInit(): void {
    this.sub$ = this.configService.getConfig();
  }

}
