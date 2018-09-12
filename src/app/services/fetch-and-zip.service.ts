import { Injectable } from '@angular/core';
import { AdvizeoService } from './advizeo.service';

@Injectable({
  providedIn: 'root'
})
export class FetchAndZipService {

  constructor(private advizeoService: AdvizeoService) {
  }

  public getBuildingUidsForOneUser(userUid: string): Promise<any> {
    return this.advizeoService
      .get(`/v1/buildings?userUid=${userUid}`)
      .toPromise();
  }

}
