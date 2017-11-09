import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	private term: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(term) {
        this.router.navigate(['/search', this.term]);
    }

}
