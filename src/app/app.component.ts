import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public store = Inject('TodosStore');

  /**
   * Angular lifecycle hook: Initialization
   */
  ngOnInit(): void {
    this.store.todos();
  }
}
