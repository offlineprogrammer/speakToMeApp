import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Txt2speechService {
  txt2SpeechAPIUrl: string = 'https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=';

 

  constructor(private http: HttpClient) { }

  getWordDef(word:string) {
    return new Promise(resolve => {
      this.http.post(this.txt2SpeechAPIUrl+word).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
