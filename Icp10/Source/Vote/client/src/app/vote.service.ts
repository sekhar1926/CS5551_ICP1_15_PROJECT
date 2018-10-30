import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Vote} from './vote';
import { map } from 'rxjs/operators';
import { ContentType } from '@angular/http/src/enums';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: Http) { }

   

  //retrievin VoteService

  getVotes()
  {
    return this.http.get('http://localhost:3000/api/votes')
    .pipe(map(res =>res.json()));
  }

  //get user votes
  getuserVotes(id)
  {
    return this.http.get('http://localhost:3000/api/uservotes'+id)
    .pipe(map(res =>res.json()));
  }

  getoneVote(id)
  {
    return this.http.get('http://localhost:3000/api/votes/id/'+id)
    .pipe(map(res =>res.json()));
  }

  //add Vote

  addVote(newVote){
    var headers = new Headers();
    headers.append('ContentType','application/json');
    return this.http.post('http://localhost:3000/api/vote', newVote,{headers:headers})
    .pipe(map(res => res.json()));
  }


  //add userVote

  adduserVote(newVote1){
    var headers = new Headers();
    headers.append('ContentType','application/json');
    return this.http.post('http://localhost:3000/api/uservote', newVote1,{headers:headers})
    .pipe(map(res => res.json()));

  }

  //delete

  deleteVote(id)
  {
    return this.http.delete('http://localhost:3000/api/vote/'+id)
    .pipe(map(res => res.json()));
  }
}
