import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CvService {

    constructor(private http: Http) {
    }

    // Get all posts from the API
    getExperiences() {
        return this.http.get('/api/cv/get/experiences')
            .map(res => res.json());
    }
}
