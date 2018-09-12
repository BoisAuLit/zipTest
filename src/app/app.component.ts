import { Component } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as JSZipUtils from 'jszip-utils';
import { urlsPourJulaine } from './pour_juliane';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }

  test(): any {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get('https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_0_593740c655564e9aa515f160330cc4d8.pdf', {
      headers: headers,
      responseType: 'blob'
    });
  }


  myFunction2(): void {


    const zip = new JSZip();
    let count = 0;
    const zipFilename = 'zipFilename.zip';
    const urls = [
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_0_593740c655564e9aa515f160330cc4d8.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_1_46440702adde44e4aa0a783abcdbc31f.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_10_f337163d6fac43769197efb6290fe114.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_11_5a06a3b3fffa442e9f3dd6faab1932ee.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_12_8a1a599c3314422bbe31bc9019fdc30d.pdf'
    ];

    const urls_2 = [
      'http://www.africau.edu/images/default/sample.pdf'
    ];

    /*
    *
      'https://bucket.advizeo.io/reports/Rapports_Hebdo_PDF_0184557c-6e7c-30fe-bca8-437e316d2e73_10_09_2018.zip',
      'https://bucket-dev.advizeo.io/reports/07a7c467-8997-35f6-a6c3-4ae62a10630d-report-2018-09-04T15-37-38.904.pdf',
    *
    *
    * */


    let urls_3 = [
      'https://bucket.advizeo.io/pictures/buildings/25a0c378-9f69-3254-a8c2-db2a1a4cb3fe?date=1536314758989',
      'https://bucket.advizeo.io/pictures/buildings/02d41507-0e73-4a6b-9e6e-ad15c292452b?date=1535960542554',
      'https://bucket.advizeo.io/pictures/buildings/8cdebc62-e044-34f0-8ffa-992881856612?date=1536314822516',
      'https://bucket.advizeo.io/pictures/buildings/11a7f8d2-619d-389a-833f-4c9e94e2ac1a?date=1536314485468',
      'https://bucket.advizeo.io/pictures/buildings/4faf8f06-8c08-38bb-92ae-b11ab5f95c08?date=1535978230397',
    ];

    let urls_4 = [
      'https://bucket-dev.advizeo.io/reports/07a7c467-8997-35f6-a6c3-4ae62a10630d-report-2018-09-04T15-37-38.904.pdf',
      'https://bucket.advizeo.io/pictures/buildings/02d41507-0e73-4a6b-9e6e-ad15c292452b?date=1535960542554',
    ];

    let ready = 0;


    // let urls_5 = [...urlsPourJulaine];

    urlsPourJulaine.forEach(function (url) {
      count++;

      const filename = url.split('/');
      // loading a file and add it in a zip file

      JSZipUtils.getBinaryContent(url, function (err, data) {
        //if (err) {
        //throw err; // or handle the error
        //}
        zip.file(filename[filename.length - 1], data, {binary: true});
        ready++;

        // Make the final zip file
        if (ready == urlsPourJulaine.length) {
          zip.generateAsync({type: 'blob'})
            .then(function (content) {
              saveAs(content, zipFilename);
            });
        }

      });
    });

  }
}
