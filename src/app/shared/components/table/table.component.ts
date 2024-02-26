import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }


  displayedColumns: string[] = ['expectedDate', 'submissionDate', 'exchangeRemarks'];
  dataSource = [
    { expectedDate: '12-11-23', submissionDate: '15-11-23', exchangeRemarks: '20-11-23' },
    { expectedDate: '12-11-23', submissionDate: '15-11-23', exchangeRemarks: '20-11-23' },
    { expectedDate: '12-11-23', submissionDate: '15-11-23', exchangeRemarks: '20-11-23' }
  ];

  ngOnInit(): void {



  }

}
