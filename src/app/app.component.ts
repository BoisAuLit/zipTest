import { Component } from '@angular/core';
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as JSZipUtils from 'jszip-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){

  }

  test(): any{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get("https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_0_593740c655564e9aa515f160330cc4d8.pdf", { headers: headers, responseType: 'blob' });
  }


  myFunction2(){



    var zip = new JSZip();
    var count = 0;
    var zipFilename = "zipFilename.zip";
    let urls = [
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_0_593740c655564e9aa515f160330cc4d8.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_1_46440702adde44e4aa0a783abcdbc31f.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_10_f337163d6fac43769197efb6290fe114.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_11_5a06a3b3fffa442e9f3dd6faab1932ee.pdf',
      'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_12_8a1a599c3314422bbe31bc9019fdc30d.pdf'
    ];

    let urls_2 = [
      "http://www.africau.edu/images/default/sample.pdf"
    ]

    let urls_3 = [
      'https://bucket.advizeo.io/pictures/buildings/25a0c378-9f69-3254-a8c2-db2a1a4cb3fe?date=1536314758989',
      'https://bucket.advizeo.io/pictures/buildings/02d41507-0e73-4a6b-9e6e-ad15c292452b?date=1535960542554',
      'https://bucket.advizeo.io/pictures/buildings/8cdebc62-e044-34f0-8ffa-992881856612?date=1536314822516',
      'https://bucket.advizeo.io/pictures/buildings/11a7f8d2-619d-389a-833f-4c9e94e2ac1a?date=1536314485468',
      'https://bucket.advizeo.io/pictures/buildings/4faf8f06-8c08-38bb-92ae-b11ab5f95c08?date=1535978230397',
    ]

    let ready = 0;

    urls_3.forEach(function(url){
      count++;

      var filename = "filename" + count;
      // loading a file and add it in a zip file

      JSZipUtils.getBinaryContent(url, function (err, data) {
        if(err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, {binary:true});
        ready++;

        // Make the final zip file
        if (ready == urls.length) {
          zip.generateAsync({type:'blob'}).then(function(content) {
            saveAs(content, zipFilename);
          });
        }

      });
    });

  }
}
