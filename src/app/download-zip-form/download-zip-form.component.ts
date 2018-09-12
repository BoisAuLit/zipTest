import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvizeoService } from '../services/advizeo.service';
import { FetchAndZipService } from '../services/fetch-and-zip.service';
import { MatTableDataSource } from '@angular/material';

const ovhUrlPrefix = 'https://storage.de1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ReportsDev/';

@Component({
  selector: 'app-download-zip-form',
  templateUrl: './download-zip-form.component.html',
  styleUrls: ['./download-zip-form.component.css']
})
export class DownloadZipFormComponent implements OnInit {

  displayedColumns: string[] = ['buildingName', 'pdf', 'xlsx'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  userUid: string;
  date: string;
  buildingsList: Building[];
  buildingsMap = new Map<string, Details>();
  checkboxData: any;

  buildingNames: string[];
  buildingPdfUrls: string[];
  buildingXlsxUrls: string[];

  buildingPdfDatasource: object[];
  buildingXlsxDatasource: object[];

  allDatasource: object[];

  eventLog: any;
  submitDataTest: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private advizeoService: AdvizeoService,
              private fetchAndZipService: FetchAndZipService) {
  }

  constructCheckboxes(): void {

    // this.checkboxData = Array.from(this.buildingsMap.values());
    this.checkboxData = Array.from(this.buildingsMap);

    this.buildingNames = new Array();
    this.buildingPdfUrls = new Array();
    this.buildingXlsxUrls = new Array();

    this.buildingPdfDatasource = new Array();
    this.buildingXlsxDatasource = new Array();
    this.allDatasource = new Array();

    for (let item of this.checkboxData) {
      const details: Details = item[1];
      const buildingName = details.buildingName;
      const pdfUrl = details.fileDetails.pdfUrl;
      const xlsxUrl = details.fileDetails.xlsxUrl;

      this.buildingNames.push(buildingName);
      this.buildingPdfUrls.push(pdfUrl);
      this.buildingXlsxUrls.push(xlsxUrl);
    }

    this.buildingPdfUrls.forEach(value =>
      this.buildingPdfDatasource.push({label: value, checked: true})
    );

    this.buildingXlsxUrls.forEach(value => {
      this.buildingXlsxDatasource.push({label: value, checked: true});
    });

    this.buildingNames.forEach((value, index) => {
      this.allDatasource.push({
        buildingName: value,
        pdfInfo: {...this.buildingPdfDatasource[index]},
        xlsxInfo: {...this.buildingXlsxDatasource[index]}
      });
    });

    this.dataSource.data = this.allDatasource;
  }

  submit(): void {
    const the_final_urls = new Array();
    this.allDatasource.forEach(value => {

      const buildingName = this.prettifyBuildingName(value['buildingName']);
      const pdfInfo = value['pdfInfo'];
      const xlsxInfo = value['xlsxInfo'];

      if (pdfInfo['checked'] === true) {
        the_final_urls.push({
          url: pdfInfo['label'],
          fileType: 'pdf',
          buildingName
        });
      }

      if (xlsxInfo['checked'] === true) {
        the_final_urls.push({
          url: xlsxInfo['label'],
          fileType: 'xlsx',
          buildingName
        });
      }
    });

    this.submitDataTest = the_final_urls;

  }


  onChangeCoupon(event, item): void {
    item.checked = !item.checked;
  }

  onChangePdfAll($event): void {
    this.allDatasource.forEach(value =>
      value['pdfInfo'].checked = $event.target.checked
    );
  }

  onChangeXlsxAll($event): void {
    this.allDatasource.forEach(value =>
      value['xlsxInfo'].checked = $event.target.checked
    );
  }

  ngOnInit(): void {
    // Callbakc hell, to be fixed
    // todo, to remove these to environment variables (gérer les varaibles d'environnement dans un propre fichier)
    this.advizeoService.authenticate('demo@advizeo.io', 'Qzdqzd94')
      .then(res => {
        console.log('Authentification okay!');

        // We can only do this after authentification okay
        // subscribe to router event
        this.route.queryParams.subscribe((params: Params) => {
          this.userUid = params['userUid'];
          this.date = params['date'];

          // Here, we use the fetch and zip service
          this.fetchAndZipService
            .getBuildingUidsForOneUser(this.userUid)
            .then(res => {
              console.log('The result is: ', res);
              this.buildingsList = res.buildings;
              this.populateMaps();
            })
            .catch(reject => {
              console.log('getting building uids for user failed!', reject);
            });
        });

      })
      .catch(reject => {
        console.log('Authentification failed!');
      });
  }

  populateMaps(): void {
    this.buildingsList.forEach(building => {

      const buildingUid: string = building.uid;
      const buildingName: string = building.name;

      const pdfUrl: string = this.composePdfUrl(buildingUid);
      const xlsxUrl: string = this.composeXlsxUrl(buildingUid);

      let details: Details = <Details>{};
      details.buildingName = buildingName;
      details.fileDetails = {pdfUrl, xlsxUrl};

      this.buildingsMap.set(buildingUid, details);
    });

    this.constructCheckboxes();
  }

  //todo, to be wrapped in a more general method
  composePdfUrl(buildingUid: string): string {
    return ovhUrlPrefix + buildingUid + '-' + this.date + '.pdf';
  }

  //todo, to be wrapped in a more general method
  composeXlsxUrl(buildingUid: string): string {
    return ovhUrlPrefix + buildingUid + '-' + this.date + '.xlsx';
  }

  couponCoupure(): void {
    alert('Bohao a appuyé sur le bouton !');
  }

  prettifyBuildingName(buildingName: string): string {
    return buildingName.replace(' ', '-');
  }

  //******************************************************************************************************
  lastAction: string;

  data = [
    {label: 'one', checked: false},
    {label: 'two', checked: false},
    {label: 'three', checked: true},
    {label: 'four', checked: false},
    {label: 'five', checked: false}
  ];

  onChange(event, index, item) {

    item.checked = !item.checked;

    this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

    console.log(index, event, item);
  }

  //******************************************************************************************************
}


interface Details {
  buildingName: string;
  fileDetails: {
    pdfUrl: string;
    xlsxUrl: string;
  };
}


interface Building {
  uid: string;
  name: string;
}
