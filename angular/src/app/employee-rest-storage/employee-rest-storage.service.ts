import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from '../models/Employee';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class EmployeeRestStorageService {

  baseUrl: string = 'http://127.0.0.1:8082/api';
  constructor(private http: HttpClient, private messageService: MessageService){}

getEmployees(): Observable<Employee[]>{
  return this.http.get<Employee[]>(this.baseUrl);
}
getEmployee(id: number): Observable<Employee>{
  //const url = `${this.baseUrl}/${id}`;
  return this.http.get<Employee>(`${this.baseUrl}/${id}`).pipe(
    tap(_ => { console.log(id)}),
    catchError(this.handleError<Employee>(`getEmployee id=${id}`))
  )
}

addEmployee(employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(`${this.baseUrl}/add`, employee, httpOptions).pipe(
  tap((newEmployee: Employee) => this.log(`added Employee w/ id=${newEmployee.id}`)),
  catchError(this.handleError<Employee>('addEmployee')));
}

updateEmployee(employee:Employee): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/${employee.id}`, employee, httpOptions).pipe(
    tap(_ => this.log(`updated employee id=${employee.id}`)),
    catchError(this.handleError<void>('updateEmployee'))
  );
}

// updateEmployee (employee : Employee) : Observable<Employee> {
//   return this.http.put<HttpResponse<Employee>>(this.baseUrl + '/' + employee.id, httpOptions)
//     .pipe(map(response => {
//       return employee;
//     }));
// }



private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

// findById(employeeId : number) : Observable<Employee> {
//   return this.http.get<Employee>(this.baseUrl + employeeId)

    
// }

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




