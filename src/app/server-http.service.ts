import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from '././model/School';
import { enviroment } from 'src/app/eviroment/eviroment';
import { Observable } from 'rxjs';
import { Major } from 'src/app/model/Major';
import axios from 'axios';
import { Project } from '././model/Project';
// import { Intern } from '././model/Intern';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {

  constructor(private httpClient: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzYzNjMwMSwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.smYxhrXK9xGZUZHne9Dg-R_PdLpt0QUDMNh4PZNwNNw'
    }),
  };
  basicAPI: string = enviroment.basicAPI;

  async getDataMajors(){
    var config = {
       method: 'get',
       url: this.basicAPI + 'majors',
       headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzY0NTE1NCwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.9blzACudQOqSywlUvRSB9Ds6dicJN0KvBbKp_d7QPjk'
      }
     };
     return await axios(config)
   }

   async getDataProject(){
    var config = {
      method: 'get',
      url: this.basicAPI + 'projects',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzY0NTE1NCwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.9blzACudQOqSywlUvRSB9Ds6dicJN0KvBbKp_d7QPjk'
      }
    };
    return await axios(config)
  }

  async getDataSchool(){
    var config = {
      method: 'get',
      url: this.basicAPI + 'universities',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzY0NTE1NCwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.9blzACudQOqSywlUvRSB9Ds6dicJN0KvBbKp_d7QPjk'
      }
    };
    return await axios(config)
  }

  async getDataAttendance(){
    var config = {
      method: 'get',
      url: this.basicAPI + 'attendances',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzY0NTE1NCwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.9blzACudQOqSywlUvRSB9Ds6dicJN0KvBbKp_d7QPjk'
      }
    };
    return await axios(config)
  }

  async getDataSemester(){
    var config = {
      method: 'get',
      url: this.basicAPI + 'semesters',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzY0NTE1NCwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.9blzACudQOqSywlUvRSB9Ds6dicJN0KvBbKp_d7QPjk'
      }
    };
    return await axios(config)
  }
}
