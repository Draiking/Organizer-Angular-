import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class TaskService {
    static url = 'https://calendar-39add-default-rtdb.firebaseio.com/task'
}