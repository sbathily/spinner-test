import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class ApiService implements HttpInterceptor {

  // Create Behavior subject ****************************************
  private myBehaviorSubject = new BehaviorSubject<boolean>(false);
  myBehaviorSubjectObs$: Observable<boolean> = this.myBehaviorSubject.asObservable() ;
  // Behavior subject ****************************************

  constructor(private http: HttpClient) { 
    //this.myBehaviorSubject = new BehaviorSubject<boolean>(true);
  }

  get_rfc(n: number): Observable<string> { 
    return this.http.get(`/assets/rfc${n}.txt`, {responseType: 'text'}) as Observable<string>; 
  }

  get getDatas(){
    return this.myBehaviorSubject.getValue();
  }

  updateLoadingStatus(value : boolean){
    console.log("in updateloadingstatus : val = " + value);
    this.myBehaviorSubject.next(value);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    console.log('INTERCEPTOR');
    this.updateLoadingStatus(true);
    return next.handle(req).pipe(
      map(resp => {
        if (resp instanceof HttpResponse) {
          this.updateLoadingStatus(false);
          return  resp;
        }
      })
    );
  }
}
